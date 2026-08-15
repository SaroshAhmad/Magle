"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/60";

const labelClass = "block text-sm font-medium mb-2";

type Status = "idle" | "submitting" | "success" | "error";

function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function submit(data: Record<string, string>) {
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof json.error === "string"
            ? json.error
            : "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  return { status, error, submit };
}

function SuccessNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-accent/25 bg-accent-soft p-8 text-center">
      <p className="font-serif text-2xl">Thank you.</p>
      <p className="mt-3 leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export function ContactForm() {
  const { status, error, submit } = useFormSubmit("/api/contact");

  if (status === "success") {
    return (
      <SuccessNote>
        Your message is with us. A real person — not an autoresponder — will
        reply within one working day.
      </SuccessNote>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        submit(Object.fromEntries(form) as Record<string, string>);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@yourbusiness.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name
          </label>
          <input
            id="business"
            name="business"
            className={inputClass}
            placeholder="Your business"
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            What are you interested in?
          </label>
          <select id="interest" name="interest" className={inputClass} defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            <option>Custom website</option>
            <option>Branding</option>
            <option>Growth marketing</option>
            <option>Products / early access</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your business *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="What do you do, and what's not working right now?"
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

export function ApplicationForm() {
  const { status, error, submit } = useFormSubmit("/api/careers");

  if (status === "success") {
    return (
      <SuccessNote>
        Application received. If there&apos;s a fit — now or when the team
        grows — we&apos;ll be in touch personally.
      </SuccessNote>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        submit(Object.fromEntries(form) as Record<string, string>);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-name" className={labelClass}>
            Your name *
          </label>
          <input
            id="app-name"
            name="name"
            required
            className={inputClass}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="app-email" className={labelClass}>
            Email *
          </label>
          <input
            id="app-email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-role" className={labelClass}>
            The role you&apos;re applying for *
          </label>
          <select id="app-role" name="role" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            <option>Design (web / brand)</option>
            <option>Engineering (full-stack / AI)</option>
            <option>Growth marketing</option>
            <option>Client success</option>
            <option>Something we haven&apos;t thought of</option>
          </select>
        </div>
        <div>
          <label htmlFor="app-portfolio" className={labelClass}>
            Portfolio, LinkedIn or GitHub
          </label>
          <input
            id="app-portfolio"
            name="portfolio"
            type="url"
            className={inputClass}
            placeholder="https://…"
          />
        </div>
      </div>

      <div>
        <label htmlFor="app-pitch" className={labelClass}>
          Show us something you&apos;ve made, and tell us why it&apos;s good *
        </label>
        <textarea
          id="app-pitch"
          name="pitch"
          required
          rows={5}
          className={inputClass}
          placeholder="Skip the CV summary. One piece of work you're proud of, what you did, and what you'd do better now."
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
