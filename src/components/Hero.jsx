function Hero() {
  return (
    <section className="w-full bg-gray-50 mt-16 ">
      <div className="bg-[url('./assets/hero.png')] bg-cover bg-center bg-no-repeat  overflow-hidden mx-8 md:mx-24">
        <div className="w-full h-full px-6 md:px-12 py-10 md:py-10 flex justify-start items-center">
          <div className="bg-white text-gray-900 max-w-lg p-8 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-lg md:text-3xl font-bold  mb-6 leading-tight">
              Master tomorrow’s skills
            </h3>
            <p className="text-md md:text-l mb-6">
              Power up your AI, career, and life skills with the most up-to-date, expert-led learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#5022c3] text-white px-6 py-3 rounded hover:bg-[#431ca3] transition">
                Get Started
              </button>
              <button className="border border-[#5022c3] text-[#5022c3] bg-white px-6 py-3 rounded hover:bg-gray-100 transition">
                Learn AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
