const staffMembers = [
  { 
    name: 'Martin', 
    instagram: 'https://www.instagram.com/martinkuhta/',
    igHandle: '@martinkuhta',
    // Privremena slika s weba dok ne staviš njihove
    image: 'https://img.freepik.com/free-photo/confident-young-afro-american-male-barber-wearing-uniform-keeping-hands-crossed-holding-scissors-comb_141793-114915.jpg' 
  },
  { 
    name: 'Luka', 
    instagram: 'https://www.instagram.com/lukabenc/',
    igHandle: '@lukabenc',
    // Privremena slika s weba
    image: 'https://img.freepik.com/free-photo/confident-young-afro-american-male-barber-wearing-uniform-keeping-hands-crossed-holding-scissors-comb_141793-114915.jpg'
  },
];

export default function Staff() {
  return (
    <section id="staff" className="py-16 border-b border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-5xl px-4 text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>Naš Tim</h2>
        <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-12"></div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24" data-aos="fade-up" data-aos-delay="100">
          {staffMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center group">
              {/* Povećana slika - w-56 h-56 */}
              <div className="w-56 h-56 rounded-full border-2 border-transparent group-hover:border-[#d4af37] p-1 transition-all duration-300 mb-6 shadow-2xl">
                 <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">{member.name}</h3>
              
              <a 
                href={member.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#d4af37]/80 hover:text-[#d4af37] transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span>{member.igHandle}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}