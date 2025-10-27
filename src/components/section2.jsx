import img1 from "../assets/img1.png";

function HeroSection() {
  return (
    <section className="bg-[#0b0b3f] text-white py-16 px-6 md:px-10 lg:px-16 rounded-3xl max-w-7xl mx-auto mt-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* --- Left Side: Text --- */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Reimagine your career in the AI era
          </h1>
          <p className="text-lg text-gray-300">
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">
                <i className="fa fa-star"></i>
              </span>
              Learn AI and more
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">
                <i className="fa fa-trophy"></i>
              </span>
              Practice with AI coaching
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">
                <i className="fa fa-desktop"></i>
              </span>
              Prep for a certification
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">
                <i className="fas fa-lightbulb"></i>
              </span>
              Advance your career
            </li>
          </ul>

          <div>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md mt-4 hover:bg-gray-200 transition">
              Learn more
            </button>
            <p className="text-sm text-gray-400 mt-2">
              Starting at ₦7,500/month
            </p>
          </div>
        </div>

        {/* --- Right Side: Image --- */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="AI learning"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
