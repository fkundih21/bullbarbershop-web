import s1 from '../assets/s1.jpg'

const importedGallery = import.meta.glob('../assets/s{1,2,3,4,5,6,7,8}.jpg', {
  eager: true,
  import: 'default',
})

const galleryImages = Array.from({ length: 8 }, (_, i) => {
  const key = `../assets/s${i + 1}.jpg`
  return importedGallery[key] ?? s1
})

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest"
            style={{ fontFamily: '"Rye", serif' }}
          >
            Galerija
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, idx) => (
            <div
              key={`gallery-${idx + 1}`}
              className="aspect-square rounded-xl overflow-hidden group border border-white/10"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <img
                src={src}
                alt={`Galerija ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
