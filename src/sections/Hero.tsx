/**
 * Premium two-column hero with a bespoke abstract illustration
 * echoing the Nicholson logo's swoosh and chart-bar motif.
 */
export function Hero() {
  return (
    <section id="top" className="relative bg-navy text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div className="relative z-10">
          <p
            className="hero-rise text-teal-light font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm"
            style={{ animationDelay: '0.1s' }}
          >
            Supporting individuals, sole traders &amp; small businesses
          </p>
          <h1
            className="hero-rise mt-6 font-serif text-[2.6rem] leading-[1.08] sm:text-6xl"
            style={{ animationDelay: '0.25s' }}
          >
            Accurate Books.
            <br />
            <span className="text-teal-light">Clear Insights.</span>
          </h1>
          <p
            className="hero-rise mt-6 text-2xl sm:text-3xl text-teal-light"
            style={{ fontFamily: '"Dancing Script", cursive', animationDelay: '0.45s' }}
          >
            More time for your business.
          </p>
          <p
            className="hero-rise mt-6 max-w-xl text-slate-200 leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            Friendly, professional bookkeeping from Jackie Nicholson — helping
            you stay organised, understand your finances, and spend less time
            on paperwork.
          </p>
          <div className="hero-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.75s' }}>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal/25 hover:bg-teal-light hover:-translate-y-0.5 transition-all"
            >
              Let's Have a Chat
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white hover:border-teal-light hover:text-teal-light transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Bespoke abstract illustration */}
        <div
          className="hero-rise relative z-10 mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: '0.5s' }}
          aria-hidden="true"
        >
          <div className="float-soft">
            <svg viewBox="0 0 520 440" fill="none" className="w-full h-auto drop-shadow-2xl">
              {/* soft translucent layers */}
              <circle cx="400" cy="110" r="150" fill="#24406b" opacity="0.55" />
              <circle cx="120" cy="340" r="120" fill="#2aa79b" opacity="0.12" />

              {/* ascending chart bars — echoes the logo monogram */}
              <rect x="200" y="230" width="44" height="130" rx="10" fill="#2aa79b" opacity="0.85" />
              <rect x="262" y="185" width="44" height="175" rx="10" fill="#4cc0b4" opacity="0.9" />
              <rect x="324" y="135" width="44" height="225" rx="10" fill="#2aa79b" />

              {/* flowing brand swoosh */}
              <path
                d="M70 330 C 160 420, 340 400, 470 210"
                stroke="#4cc0b4"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M70 355 C 170 445, 350 425, 480 240"
                stroke="#2aa79b"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* elegant curved hairlines */}
              <path
                d="M60 120 C 150 60, 260 60, 350 110"
                stroke="#4cc0b4"
                strokeWidth="2"
                opacity="0.4"
              />
              <path
                d="M80 145 C 160 90, 250 88, 335 132"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.18"
              />

              {/* delicate decorative dots */}
              <circle cx="470" cy="205" r="7" fill="#4cc0b4" />
              <circle cx="70" cy="330" r="6" fill="#ffffff" opacity="0.6" />
              <circle cx="350" cy="110" r="5" fill="#ffffff" opacity="0.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* soft curve into the next section */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 text-slate-50"
        aria-hidden="true"
      >
        <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
      </svg>
    </section>
  )
}
