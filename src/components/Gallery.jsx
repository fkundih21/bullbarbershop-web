export default function Gallery() {
  return (
    <section id="gallery" className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Galerija
        </h2>
        <p className="mt-2 text-white/70">
          Dodaj fotke kad budeš spreman — ovdje je već pripremljen clean layout.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

