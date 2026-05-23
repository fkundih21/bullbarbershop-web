export default function About() {
  return (
    <section id="about" className="py-20 relative bg-black border-b border-white/5">
      <div className="mx-auto max-w-4xl px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>
          Naš <span className="text-[#d4af37]">Zanat.</span>
        </h2>
        <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Tvoj stil, naš potpis. Bez žurbe i bez serijskih šišanja. Samo precizni rezovi, vrhunska usluga i atmosfera u kojoj ćeš se osjećati kao doma.
        </p>
      </div>
    </section>
  )
}