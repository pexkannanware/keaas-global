"use client";

import { useState, type FormEvent } from "react";

type ContactState = {
  ok: boolean;
  error: string;
  pending: boolean;
};

const initial: ContactState = { ok: false, error: "", pending: false };

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initial);

  if (state.ok) {
    return (
      <div className="py-8">
        <p className="eyebrow text-keaas">Request received</p>
        <p className="mt-4 text-2xl tracking-tight text-ink">
          Thank you. A KEAAS partner will respond within one business day.
        </p>
      </div>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const expertise = String(data.get("expertise") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !company || !expertise || !message) {
      setState({ ok: false, error: "Please complete the required fields.", pending: false });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ ok: false, error: "Please enter a valid work email.", pending: false });
      return;
    }

    setState({ ok: false, error: "", pending: true });
    const subject = `KEAAS enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `Phone: ${String(data.get("phone") ?? "").trim() || "Not provided"}`,
      `Expertise: ${expertise}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:Keaasglobal@kannanware.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState({ ok: true, error: "", pending: false });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
      <Field label="Full Name" name="name" autoComplete="name" required />
      <Field
        label="Work Email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label="Company"
        name="company"
        autoComplete="organization"
        required
      />
      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
      />
      <label className="block pt-4">
        <span className="eyebrow text-muted">What expertise do you need?</span>
        <select name="expertise" required defaultValue="" className="form-field-light">
          <option value="" disabled>
            Select a discipline
          </option>
          <option>Functional — SAP / Finance / Supply Chain</option>
          <option>Technical — Architecture / Integration / Cloud</option>
          <option>Data &amp; Analytics</option>
          <option>Programme &amp; Delivery Leadership</option>
          <option>Complete expert team</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block pt-4">
        <span className="eyebrow text-muted">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="form-field-light resize-none"
          placeholder="Programme context, timeline, locations"
        />
      </label>

      {state.error ? (
        <p className="pt-3 text-sm text-keaas" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state.pending}
        className="mt-8 inline-flex items-center border border-keaas bg-keaas px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:bg-keaas-deep disabled:opacity-60"
      >
        {state.pending ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block pt-4">
      <span className="eyebrow text-muted">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="form-field-light"
      />
    </label>
  );
}
