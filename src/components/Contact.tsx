import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="section-eyebrow">Visit / Enquire</span>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
              Let&apos;s get you <br />
              <span className="text-gradient">started.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg">
              Drop in for a free tour, talk to a coach, or grab launch-day
              pricing. We respond within 12 hours, every day.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 21s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Address</div>
                  <div className="text-white">
                    {site.address.line1}, {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M22 16.92V21a1 1 0 01-1.11 1A19 19 0 012 4.11 1 1 0 013 3h4.09a1 1 0 011 .75l1 4a1 1 0 01-.27 1L7 10.5a16 16 0 006.5 6.5l1.75-1.82a1 1 0 011-.27l4 1a1 1 0 01.75 1z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Call us</div>
                  <div className="text-white space-x-3">
                    {site.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[#ff7a00]">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Hours</div>
                  <div className="text-white">{site.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src={site.mapEmbed}
                className="w-full h-full grayscale-[40%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carve 24x7 location map"
              />
            </div>
          </div>

          <form
            className="card p-8 self-start"
            action="https://formsubmit.co/hello@carve24x7.com"
            method="POST"
          >
            <h3 className="font-display text-3xl tracking-wide">
              Send us a message
            </h3>
            <p className="text-zinc-400 mt-1 text-sm">
              We&apos;ll get back to you within a day.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  Goal
                </label>
                <select
                  name="goal"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff7a00] outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select your goal</option>
                  <option>Weight loss</option>
                  <option>Muscle gain</option>
                  <option>General fitness</option>
                  <option>Personal training</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff7a00] outline-none resize-none"
                  placeholder="Tell us a bit about what you're looking for…"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              Send Message
              <span aria-hidden>→</span>
            </button>

            <p className="text-xs text-zinc-500 mt-3 text-center">
              By submitting you agree to be contacted about your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-[#ff7a00] outline-none"
      />
    </div>
  );
}
