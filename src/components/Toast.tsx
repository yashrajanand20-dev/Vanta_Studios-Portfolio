import { useState, useEffect } from 'react';
import { Check, ExternalLink, X } from 'lucide-react';
import { STUDIO_EMAIL } from '@/utils/email';

export function Toast() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      setToastMessage(customEvent.detail?.message || 'Email copied to clipboard');
      clearTimeout(timer);
      timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);
    };

    window.addEventListener('vanta-toast', handler);
    return () => {
      window.removeEventListener('vanta-toast', handler);
      clearTimeout(timer);
    };
  }, []);

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0d0d10] border border-[#26262e] text-white px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 max-w-md animate-fade-in"
    >
      <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
        <Check size={14} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-neutral-100">{toastMessage}</span>
        <div className="flex items-center gap-3 mt-1">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#a78bfa] hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
          >
            Open in Gmail
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
      <button
        onClick={() => setToastMessage(null)}
        className="ml-auto text-neutral-500 hover:text-white p-1 transition-colors"
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
