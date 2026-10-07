import { LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { portfolio } from "../data/portfolio";
import { Reveal } from "./Reveal";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

type Notice = { title: string; description: string } | null;

function Field({
  label,
  name,
  type = "text",
  value,
  required,
  onChange,
}: {
  label: string;
  name: keyof FormState;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (name: keyof FormState, value: string) => void;
}) {
  const id = `contact-${name}`;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-indigo-500/50 focus:outline-none"
      />
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="group inline-flex items-center gap-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted text-indigo-500 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:border-white/5 dark:bg-neutral-900">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);

  const update = (name: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSending(true);
    const name = `${form.firstName} ${form.lastName}`.trim();
    const payload = {
      name,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
      _subject: `Portfolio inquiry from ${name}`,
      _template: "table",
      _captcha: "false",
      _replyto: form.email,
    };

    try {
      if (portfolio.formEndpoint) {
        const response = await fetch(portfolio.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        const data = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
        const delivered = response.ok && data?.success !== false && data?.success !== "false";
        if (!delivered) {
          throw new Error(data?.message || "The message could not be delivered. Please email directly.");
        }
        setNotice({ title: "Message Sent!", description: "I'll get back to you as soon as possible." });
        setForm(emptyForm);
      } else {
        const body = `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
        window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(body)}`;
        setNotice({ title: "Email draft opened", description: "Your mail app should open with this message ready to send." });
        setForm(emptyForm);
      }
    } catch (error) {
      const description = error instanceof Error ? error.message : "Something went wrong. Please try again later.";
      setNotice({ title: "Message not delivered", description });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-100/50 py-10 backdrop-blur-md sm:py-16 md:py-24 dark:bg-zinc-900/40">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal direction="left">
            <div className="text-center md:text-left">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-indigo-500 uppercase">{portfolio.contactEyebrow}</span>
              <h2 className="mb-8 text-4xl font-black tracking-tighter text-foreground uppercase md:text-6xl">
                {portfolio.contactTitle} <br /> <span className="text-indigo-500">{portfolio.contactAccent}</span>
              </h2>
            </div>
            <p className="mb-12 w-full text-lg text-gray-400 md:max-w-md">{portfolio.contactCopy}</p>
            <div className="inline-flex flex-col space-y-6">
              <a href={`mailto:${portfolio.email}`} className="inline-flex">
                <InfoRow icon={<Mail className="h-5 w-5" />} label="Email" value={portfolio.email} />
              </a>
              <a href={portfolio.phoneHref} className="inline-flex">
                <InfoRow icon={<Phone className="h-5 w-5" />} label="Call Me" value={portfolio.phone} />
              </a>
              <InfoRow icon={<MapPin className="h-5 w-5" />} label="Location" value={portfolio.location} />
            </div>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div className="relative z-10 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm backdrop-blur-sm sm:p-8 dark:border-indigo-900/20 dark:bg-[#080f1a]/90 dark:shadow-none">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="First Name" name="firstName" value={form.firstName} onChange={update} required />
                  <Field label="Last Name" name="lastName" value={form.lastName} onChange={update} required />
                </div>
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={update} required />
                <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={update} />
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="ml-1 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-indigo-500/50 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full transform items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 font-bold text-white transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-70"
                >
                  {sending ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <>SEND MESSAGE <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
          </Reveal>
        </div>
      </div>

      {notice && (
        <div role="status" aria-live="polite" className="fixed right-4 bottom-4 z-[300] w-[min(100%-2rem,420px)]">
          <div className="rounded-xl border border-white/10 bg-neutral-950/95 p-4 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{notice.title}</p>
                <p className="mt-1 text-sm text-neutral-300">{notice.description}</p>
              </div>
              <button type="button" aria-label="Dismiss notification" onClick={() => setNotice(null)} className="text-neutral-400 hover:text-white">
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
