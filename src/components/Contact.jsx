export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>Lokacija</h2>
          <div className="w-12 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Informacije */}
          <div className="lg:w-2/5 flex flex-col justify-center w-full">
            <h3 className="text-3xl font-light text-white mb-10 tracking-wide uppercase" data-aos="fade-up">Posjeti nas</h3>
            
            <div className="space-y-10">
              {/* Adresa */}
              <div data-aos="fade-up">
                <p className="text-sm text-[#d4af37] font-semibold uppercase tracking-[0.2em] mb-2">Adresa</p>
                <p className="text-xl text-white font-medium">Ul. Dr. Ljudevita Gaja 27</p>
                <p className="text-white/60">49 000 Krapina</p>
              </div>
              
              {/* Radno Vrijeme */}
              <div data-aos="fade-up">
                <p className="text-sm text-[#d4af37] font-semibold uppercase tracking-[0.2em] mb-3">Radno Vrijeme</p>
                <div className="flex justify-between items-center text-white/90 mb-3 border-b border-white/10 pb-3">
                  <span className="font-light">Pon - Pet</span>
                  <span className="font-bold text-lg">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center text-white/90 mb-3 border-b border-white/10 pb-3">
                  <span className="font-light">Subota</span>
                  <span className="font-bold text-lg">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="font-light">Nedjelja i praznici</span>
                  <span className="font-bold text-red-500 uppercase tracking-widest text-sm">Zatvoreno</span>
                </div>
              </div>

              {/* Kontakt */}
              <div data-aos="fade-up">
                <p className="text-sm text-[#d4af37] font-semibold uppercase tracking-[0.2em] mb-3">Rezervacije</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:0989142594" className="text-l text-white font-semibold hover:text-[#d4af37] transition-colors w-max">Luka: 098 914 2594</a>
                  <a href="tel:0998606782" className="text-l text-white font-semibold hover:text-[#d4af37] transition-colors w-max">Martin: 099 860 6782</a>
                </div>
              </div>
            </div>
          </div>
          

          {/* Mapa */}
          <div data-aos="fade-left" data-aos-delay="200" className="lg:w-3/5 w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.400094300797!2d15.8730635!3d46.1626908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765ed001537d039%3A0xda0689bb4d4301fc!2sBULL%20Barbershop!5e0!3m2!1sen!2shr!4v1775248961446!5m2!1sen!2shr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%) opacity(80%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  )
}