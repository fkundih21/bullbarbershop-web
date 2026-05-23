const hairServices = [
  { name: 'Fade šišanje', price: '16,00 €' },
  { name: 'Klasično muško šišanje', price: '12,00 €' },
  { name: 'Izbrijavanje glave', price: '8,00 €' },
  { name: 'Pranje kose', price: '3,00 €' },
  { name: 'Pranje + oblikovanje ', price: '5,00 €' },
  { name: 'Blajhanje + preljev', price: '35,00 €' },


];

const beardServices = [
  { name: 'Uređivanje brade', price: '10,00 €' },
  { name: 'Njega lica + brade', price: '7,00 €' },
];

export default function Prices() {
  return (
    <section id="prices" className="py-24 relative bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>Cjenik</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* KOSA */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4" >
              <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
              <h3 className="text-3xl font-bold text-white uppercase tracking-wider">Kosa</h3>
            </div>
            <ul className="space-y-6">
              {hairServices.map((service, idx) => (
                <li key={idx} className="flex justify-between items-end group">
                  <span className="text-xl font-bold tracking-wide text-white group-hover:text-[#d4af37] transition-colors">{service.name}</span>
                  <div className="flex-1 border-b-2 border-dotted border-white/20 mx-4 mb-1.5 group-hover:border-[#d4af37]/50 transition-colors"></div>
                  <span className="text-xl font-bold text-[#d4af37]">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BRADA */}
          <div data-aos="fade-up" data-aos-delay="250">
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4" >
              <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>
              <h3 className="text-3xl font-bold text-white uppercase tracking-wider">Brada</h3>
            </div>
            <ul className="space-y-6">
              {beardServices.map((service, idx) => (
                <li key={idx} className="flex justify-between items-end group">
                  <span className="text-xl font-bold tracking-wide text-white group-hover:text-[#d4af37] transition-colors">{service.name}</span>
                  <div className="flex-1 border-b-2 border-dotted border-white/20 mx-4 mb-1.5 group-hover:border-[#d4af37]/50 transition-colors"></div>
                  <span className="text-xl font-bold text-[#d4af37]">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}