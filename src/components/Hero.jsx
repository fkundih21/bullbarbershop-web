import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-4 py-12 md:py-16 min-h-[80vh] md:min-h-screen bg-black overflow-hidden"
    >
      {/* Pozadinska slika s overlay-om */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-24 grayscale scale-110 -translate-y-[8%]"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl -translate-y-[5vh] " data-aos="fade-up" data-aos-duration="1200">
        <h1
          className="text-6xl md:text-[4.625rem] font-medium tracking-tight text-white mb-6 uppercase drop-shadow-lg"
          style={{ fontFamily: '"Rye", serif' }}
        >
          Bull <span className="text-[#d4af37]">Barbershop</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Tradicija. Preciznost. Stil.
        </p>
      </div>
    </section>
  )
}