export const STUDIO_EMAIL = 'vantastudios98@gmail.com';
export const YOUTUBE_URL = 'https://www.youtube.com/@VantaStudios98';
export const TALLY_URL = 'https://tally.so/r/445poX';

export function handleEmailClick(e?: React.MouseEvent) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(STUDIO_EMAIL).catch(() => {});
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('vanta-toast', {
        detail: {
          message: `Email copied: ${STUDIO_EMAIL}`,
        },
      })
    );
  }
}
