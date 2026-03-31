const hair = [
  { name: 'Fade šišanje', price: '16 €' },
  { name: 'Klasično muško šišanje', price: '12 €' },
  { name: 'Izbrijavanje glave', price: '8 €' },
  { name: 'Pranje kose', price: '3 €' },
  { name: 'Pranje + oblikovanje kose', price: '5 €' },
  { name: 'Blajhanje + preljev', price: '35 €' },
]

const beard = [
  { name: 'Uređivanje brade', price: '10 €' },
  { name: 'Njega lica + brade', price: '7 €' },
]

function PriceList({ items }) {
  return (
    <div className="mt-6">
      <div>
        {items.map((item) => (
          <div key={item.name} className="price-row">
            <div className="text-sm text-white/90 md:text-base">{item.name}</div>
            <div className="price-dots" aria-hidden="true" />
            <div className="text-sm font-semibold text-accent md:text-base">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Prices() {
  return (
    <section id="prices" className="section">
      <div className="section-inner">
        <div className="text-center">
          <h2 className="section-heading-xl">CJENIK</h2>
          <div className="mx-auto mt-4 section-underline" />
        </div>

        <p className="section-subtitle">
          Jasne cijene za sve usluge. Nema skrivenih dodataka — samo kosa i brada
          napravljeni kako treba.
        </p>

        <div className="prices-panels">
          <div className="panel rounded-2xl p-6">
            <div className="panel-header">
              <div className="panel-title">KOSA</div>
              <div className="panel-divider" />
            </div>
            <PriceList items={hair} />
          </div>

          <div className="panel rounded-2xl p-6">
            <div className="panel-header">
              <div className="panel-title">BRADA</div>
              <div className="panel-divider" />
            </div>
            <PriceList items={beard} />
          </div>
        </div>
      </div>
    </section>
  )
}

