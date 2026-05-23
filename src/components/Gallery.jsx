const placeholderImages = [
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/530165000_17914635234163850_5557097518990332003_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5Njg0Mzc2OTIzNzkwMTg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=WGDh_JtSHwYQ7kNvwGD0AOg&_nc_oc=AdpXc3AITTG-gdVGZYR3hyblVjuh2R-OKiE8m0blEgHWJKO1wQHnnXB5q5HLA7bUCmc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=iETBTywI0d6pP3wOTjlvVg&_nc_ss=7a32e&oh=00_Af3McnVcS5b2C-3QESZehH9Rl_8Ezl423LBGYOt9T9OQDw&oe=69D5FA0E",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/624894630_18086373011328059_552714190262281902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzQ2MTIxNzM3MjMzNjY3Mjc3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=vFsbXUoYchcQ7kNvwFg_g1K&_nc_oc=AdoEn8zq6Ddv7KaFUK4HHDHyTo-e5_ZP3g27llBwo8jX1Pk_-Jp8aZkcwTyA3R8bYWs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=dLCVQwuZCmNbEYYxo0fz2A&_nc_ss=7a32e&oh=00_Af0QALeP2Ux9UxvCOXUtOeqYXTnZF2WVuuok0LoCzY7ELw&oe=69D5EA7A",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/530165000_17914635234163850_5557097518990332003_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5Njg0Mzc2OTIzNzkwMTg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=WGDh_JtSHwYQ7kNvwGD0AOg&_nc_oc=AdpXc3AITTG-gdVGZYR3hyblVjuh2R-OKiE8m0blEgHWJKO1wQHnnXB5q5HLA7bUCmc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=iETBTywI0d6pP3wOTjlvVg&_nc_ss=7a32e&oh=00_Af3McnVcS5b2C-3QESZehH9Rl_8Ezl423LBGYOt9T9OQDw&oe=69D5FA0E",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/624894630_18086373011328059_552714190262281902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzQ2MTIxNzM3MjMzNjY3Mjc3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=vFsbXUoYchcQ7kNvwFg_g1K&_nc_oc=AdoEn8zq6Ddv7KaFUK4HHDHyTo-e5_ZP3g27llBwo8jX1Pk_-Jp8aZkcwTyA3R8bYWs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=dLCVQwuZCmNbEYYxo0fz2A&_nc_ss=7a32e&oh=00_Af0QALeP2Ux9UxvCOXUtOeqYXTnZF2WVuuok0LoCzY7ELw&oe=69D5EA7A",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/530165000_17914635234163850_5557097518990332003_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5Njg0Mzc2OTIzNzkwMTg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=WGDh_JtSHwYQ7kNvwGD0AOg&_nc_oc=AdpXc3AITTG-gdVGZYR3hyblVjuh2R-OKiE8m0blEgHWJKO1wQHnnXB5q5HLA7bUCmc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=iETBTywI0d6pP3wOTjlvVg&_nc_ss=7a32e&oh=00_Af3McnVcS5b2C-3QESZehH9Rl_8Ezl423LBGYOt9T9OQDw&oe=69D5FA0E",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/624894630_18086373011328059_552714190262281902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzQ2MTIxNzM3MjMzNjY3Mjc3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=vFsbXUoYchcQ7kNvwFg_g1K&_nc_oc=AdoEn8zq6Ddv7KaFUK4HHDHyTo-e5_ZP3g27llBwo8jX1Pk_-Jp8aZkcwTyA3R8bYWs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=dLCVQwuZCmNbEYYxo0fz2A&_nc_ss=7a32e&oh=00_Af0QALeP2Ux9UxvCOXUtOeqYXTnZF2WVuuok0LoCzY7ELw&oe=69D5EA7A",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/530165000_17914635234163850_5557097518990332003_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5Njg0Mzc2OTIzNzkwMTg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=WGDh_JtSHwYQ7kNvwGD0AOg&_nc_oc=AdpXc3AITTG-gdVGZYR3hyblVjuh2R-OKiE8m0blEgHWJKO1wQHnnXB5q5HLA7bUCmc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=iETBTywI0d6pP3wOTjlvVg&_nc_ss=7a32e&oh=00_Af3McnVcS5b2C-3QESZehH9Rl_8Ezl423LBGYOt9T9OQDw&oe=69D5FA0E",
  "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/530165000_17914635234163850_5557097518990332003_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5Njg0Mzc2OTIzNzkwMTg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=WGDh_JtSHwYQ7kNvwGD0AOg&_nc_oc=AdpXc3AITTG-gdVGZYR3hyblVjuh2R-OKiE8m0blEgHWJKO1wQHnnXB5q5HLA7bUCmc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_gid=iETBTywI0d6pP3wOTjlvVg&_nc_ss=7a32e&oh=00_Af3McnVcS5b2C-3QESZehH9Rl_8Ezl423LBGYOt9T9OQDw&oe=69D5FA0E",

];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest" style={{ fontFamily: '"Rye", serif' }}>Galerija</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        {/* CSS Grid za Galeriju */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholderImages.map((src, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden group border border-white/10"
              data-aos="fade-up" data-aos-delay={idx * 150}
            >
              <img 
                src="src/assets/s1.jpg" 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}