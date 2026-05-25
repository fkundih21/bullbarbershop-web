import { useState } from 'react'
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
  const [activeIdx, setActiveIdx] = useState(null)

  const handleImageTap = (idx) => {
    setActiveIdx((current) => (current === idx ? null : idx))
  }

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
          {galleryImages.map((src, idx) => {
            const isActive = activeIdx === idx

            return (
              <button
                key={`gallery-${idx + 1}`}
                type="button"
                onClick={() => handleImageTap(idx)}
                className="w-full aspect-square rounded-xl overflow-hidden border border-white/10 p-0 bg-transparent cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                aria-pressed={isActive}
                aria-label={`Galerija ${idx + 1}${isActive ? ', odabrano' : ''}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className={`w-full h-full object-cover transition-all duration-500 grayscale ${
                    isActive ? 'grayscale-0 scale-110' : 'scale-100'
                  } md:hover:grayscale-0 md:hover:scale-110`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
