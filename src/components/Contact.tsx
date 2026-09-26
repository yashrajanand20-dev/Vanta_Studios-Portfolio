import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';
import { ArrowUpRight, Check, Loader2, AlertCircle } from 'lucide-react';

const services = [
  'Website Design & Development',
  'Digital Presence',
  'Custom Digital Solutions',
  'Website Maintenance',
  'Not sure yet',
];

export function Contact() {
  const { ref, isVisible } = useReveal();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        service: form.service || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-24`}>
          {/* Left — pitch */}
          <div>
            <span className="text-xs text-[#7c3aed] tracking-[0.2em] uppercase font-medium">
              Start a Project
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 mt-4 tracking-tight text-balance">
              Let's build
              <br />
              <span className="text-neutral-500">something real.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-md">
              Tell us about your project. We'll get back to you within 48 hours
              with next steps — no sales calls, no pressure.
            </p>

            <div className="mt-10 space-y-4">
              <ContactRow label="Email" value="hello@vantastudios.com" />
              <ContactRow label="Response Time" value="Within 48 hours" />
              <ContactRow label="Availability" value="Q4 2026 — Open" />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-2xl p-8 lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 flex items-center justify-center mb-6">
                  <Check size={28} className="text-[#7c3aed]" />
                </div>
                <h3 className="font-display text-2xl font-700 mb-3">Message sent.</h3>
                <p className="text-sm text-neutral-400 max-w-xs">
                  Thanks for reaching out. We'll be in touch within 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                  />
                </div>

                <Field
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Optional"
                />

                <div>
                  <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-sm text-white focus:border-[#2a2a2a] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-[#2a2a2a] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={14} />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary group w-full inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#1a1a1a]">
      <span className="text-xs text-neutral-500 uppercase tracking-wider">{label}</span>
      <span className="text-sm text-neutral-200">{value}</span>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-[#2a2a2a] focus:outline-none transition-colors"
      />
    </div>
  );
}
