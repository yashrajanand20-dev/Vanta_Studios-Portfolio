import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_EMAIL = 'vantastudios98@gmail.com';
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const TARGET_DIRS = ['src'];
const TARGET_FILES = ['index.html'];

let errors = [];
let checkedEmailsCount = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Ignore schema/import lines with @ like @/components or @vitejs or npm packages
    // Email regex requires a domain dot extension e.g. .com, .org
    const matches = line.match(EMAIL_REGEX);
    if (matches) {
      matches.forEach((email) => {
        checkedEmailsCount++;
        if (email.toLowerCase() !== ALLOWED_EMAIL.toLowerCase()) {
          errors.push({
            file: path.relative(path.resolve(__dirname, '..'), filePath),
            line: index + 1,
            email,
          });
        }
      });
    }
  });
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        scanDir(fullPath);
      }
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js|html)$/.test(entry.name)) {
      checkFile(fullPath);
    }
  }
}

for (const dir of TARGET_DIRS) {
  scanDir(path.resolve(__dirname, '..', dir));
}

for (const file of TARGET_FILES) {
  const fullPath = path.resolve(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    checkFile(fullPath);
  }
}

console.log(`[Email Check] Scanned source files. Found ${checkedEmailsCount} email occurrences.`);

if (errors.length > 0) {
  console.error('\n❌ BUILD FAILED: Unauthorized email address(es) detected:');
  errors.forEach((err) => {
    console.error(`  - ${err.file}:${err.line} -> "${err.email}" (expected: ${ALLOWED_EMAIL})`);
  });
  console.error(`\nOnly "${ALLOWED_EMAIL}" is allowed in the portfolio.\n`);
  process.exit(1);
} else {
  console.log(`✓ Verification passed: All portfolio emails match ${ALLOWED_EMAIL}\n`);
  process.exit(0);
}
