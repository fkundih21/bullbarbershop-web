const reviews = [
    { name: "Ivan H.", text: "Uvjerljivo najbolji barber shop u gradu. Dečki su prva liga!", date: "prije mjesec dana" },
    { name: "Marko K.", text: "Vrhunska usluga, odlična atmosfera. Martin i Luka majstori svog zanata.", date: "prije 2 mjeseca" },
    { name: "Filip B.", text: "Jedino mjesto gdje se šišam i uređujem bradu. Svaka preporuka!", date: "prije 3 mjeseca" }
  ];
  
  export default function Reviews() {
    return (
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4">
          
          {/* Centrirani naslov i statistika */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-semibold text-white mb-4 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>Recenzije</h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-10"></div>
            
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-1 text-[#d4af37]">
                {/* 5 Zvjezdica */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-3xl font-bold text-white mt-2">4.9 <span className="text-lg text-white/50 font-normal">/ 5.0</span></p>
              <p className="text-white/60 uppercase tracking-widest text-sm mt-1">Google Recenzije</p>
            </div>
          </div>
  
          {/* Kartice recenzija */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div  data-aos="fade-up" data-aos-delay={idx * 150} key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-1 text-[#d4af37] mb-4" >
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-white/80 italic mb-6 font-light leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <span className="text-white font-medium">{review.name}</span>
                  <span className="text-white/40">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }