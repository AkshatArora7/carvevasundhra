import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
            Questions, <span className="text-gradient">answered.</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-black/40">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-white/[0.03]">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-lg pr-4">{f.q}</span>
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#ff7a00] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-zinc-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
