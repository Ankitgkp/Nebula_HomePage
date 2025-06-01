const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Left Text Section */}
      <div className="absolute top-0 left-0 z-10 p-10 max-w-[45%] h-full flex flex-col justify-center">
        <h1 className="text-5xl lg:text-6xl font-light leading-tight text-white">
          <span>Welcome to</span>
          <br />
          <span className="text-blue-500 font-semibold">SAST's</span> own
          <br />
          <span className="font-semibold">
            <span className="text-blue-500">Open-Source</span> Contribution Challenge
          </span>
        </h1>

        <a
          href="https://github.com/SASTxNST/Website_SAST"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 w-fit px-10 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 shadow-[0_0_16px_rgba(99,102,241,0.2)] backdrop-blur-md border border-white/5 hover:scale-102 transition-transform duration-200"
        >
          Contribute
        </a>
      </div>

      {/* Background Image & Gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-l from-black via-black/60 to-transparent z-0 absolute" />
        <img
          src="https://lh3.googleusercontent.com/9zE3StG50FuHs9PCo6kMTIhWKyIc3vJ2JqxPZEgaKc8WQ2vzAyWR4wqYYhMZ7zkhc0C893COYflGKt70Sb15e4gg7eI=s1600-w1600-h1000"
          alt="Hero"
          className="object-cover w-full h-full opacity-15"
        />
      </div>

      {/* Info Boxes Section */}
      <div className="absolute bottom-0 left-0 w-full px-8 py-6 bg-black/80 backdrop-blur-md z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs text-white">
          {[
            {
              id: "01",
              title: "Lorem Ipsum",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus justo vel ante suscipit.",
            },
            { id: "02", title: "Dolor Sit Amet" },
            { id: "03", title: "Consectetur Adipiscing" },
            { id: "04", title: "Eiusmod Tempor" },
            { id: "05", title: "Incididunt Ut" },
            { id: "06", title: "Labore et Dolore" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 ${
                i === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <h4 className="text-sm font-bold mb-1 text-white/90">
                {item.id} {item.title}
              </h4>
              {item.desc && (
                <p className="text-xs text-gray-300 mt-1">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
