export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Startup Growth Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visualize Burn Rate Scenarios<br />
          <span className="text-[#58a6ff]">with Hiring Plans</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Model your cash runway across different hiring and growth scenarios. Input your current cash, monthly burn, hiring plans, and revenue projections — see exactly when you run out of runway.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📊", title: "Scenario Modeling", desc: "Compare conservative, base, and aggressive hiring plans side by side." },
          { icon: "🔥", title: "Burn Rate Tracking", desc: "Track monthly burn with salary, overhead, and variable cost inputs." },
          { icon: "📈", title: "Revenue Projections", desc: "Layer in MRR growth to see how revenue offsets your burn over time." },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need to plan your runway</p>
          <div className="text-5xl font-bold text-[#58a6ff] mb-1">$39</div>
          <div className="text-sm text-[#8b949e] mb-6">/month</div>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited scenarios",
              "Interactive burn rate charts",
              "Hiring plan modeling",
              "Revenue projection overlays",
              "CSV export",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who is this for?",
              a: "Startup founders, CTOs, and finance leads who need to model team growth against cash reserves and plan hiring without running out of runway.",
            },
            {
              q: "Do I need accounting knowledge?",
              a: "No. Just enter your current cash balance, monthly expenses, planned hires, and expected revenue growth. The tool handles the rest.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel your subscription at any time from your billing portal. No contracts, no lock-in.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
