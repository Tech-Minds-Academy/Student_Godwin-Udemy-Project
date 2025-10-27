import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";

function Skills() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 mt-16">
      {/* --- Heading --- */}
      <div className="text-left mb-8 max-w-3xl ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-3">
          Ready to reimagine your career?
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          Get the skills and real-world experience employers want with career accelerators.
        </p>
      </div>

      {/* --- Grid Section --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md p-4 transition bg-white">
          <img src={img8} alt="Full Stack Web Developer" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="font-bold text-black mb-2 text-base sm:text-lg">
              Full Stack Web Developer
            </p>
            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs sm:text-sm">
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.7
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                461K Ratings
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                87.8 Hours
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md p-4 transition bg-white">
          <img src={img9} alt="Data Analyst" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="font-bold text-black mb-2 text-base sm:text-lg">
              Data Analyst
            </p>
            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs sm:text-sm">
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.8
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                320K Ratings
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                56.3 Hours
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md p-4 transition bg-white">
          <img src={img10} alt="UI/UX Designer" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="font-bold text-black mb-2 text-base sm:text-lg">
              UI/UX Designer
            </p>
            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs sm:text-sm">
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.6
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                290K Ratings
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                72.1 Hours
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer Link --- */}
      <div className="mt-10 text-left">
        <a
          href="#"
          className="text-purple-700 font-semibold hover:underline inline-flex items-center gap-2 text-base"
        >
          All Career Accelerators <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Skills;
