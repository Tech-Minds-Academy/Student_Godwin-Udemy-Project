import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";

function Trend() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 mt-16">
      {/* --- Heading --- */}
      <div className="text-left mb-8 max-w-3xl mx-auto md:mx-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Trending Courses
        </h1>
      </div>

      {/* --- Grid Section --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <img
            src={img11}
            alt="Python Pro Bootcamp"
            className="w-full h-44 sm:h-48 object-cover"
          />
          <div className="p-4">
            <p className="font-semibold text-black mb-1 text-base sm:text-lg">
              100 Days of Code: The Complete Python Pro Bootcamp
            </p>
            <small className="block text-gray-600 mb-2">
              Dr. Angela Yu, Developer & Lead Instructor
            </small>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs sm:text-sm mb-2">
              <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded">
                Bestseller
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.7
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                397,232 Ratings
              </span>
            </div>
            <p className="font-bold text-gray-900">₦11,900</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <img
            src={img12}
            alt="Agentic AI Engineering"
            className="w-full h-44 sm:h-48 object-cover"
          />
          <div className="p-4">
            <p className="font-semibold text-black mb-1 text-base sm:text-lg">
              The Complete Agentic AI Engineering Course (2025)
            </p>
            <small className="block text-gray-600 mb-2">Ed Donner Ligency</small>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs sm:text-sm mb-2">
              <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded">
                Bestseller
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.8
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                18,655 Ratings
              </span>
            </div>
            <p className="font-bold text-gray-900">₦10,900</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <img
            src={img13}
            alt="Full-Stack Bootcamp"
            className="w-full h-44 sm:h-48 object-cover"
          />
          <div className="p-4">
            <p className="font-semibold text-black mb-1 text-base sm:text-lg">
              The Complete Full-Stack Web Development Bootcamp
            </p>
            <small className="block text-gray-600 mb-2">
              Angela Yu, Developer & Lead Instructor
            </small>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs sm:text-sm mb-2">
              <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded">
                Bestseller
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.7
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                455,813 Ratings
              </span>
            </div>
            <p className="font-bold text-gray-900">₦21,900</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <img
            src={img14}
            alt="AWS Course"
            className="w-full h-44 sm:h-48 object-cover"
          />
          <div className="p-4">
            <p className="font-semibold text-black mb-1 text-base sm:text-lg">
              [NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02-2025
            </p>
            <small className="block text-gray-600 mb-2">
              Stephane Maarek | AWS Certified Cloud...
            </small>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs sm:text-sm mb-2">
              <span className="bg-blue-100 border border-blue-300 px-2 py-1 rounded">
                Bestseller
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                <i className="fa fa-star text-yellow-400 mr-1"></i>4.7
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded">
                288,432 Ratings
              </span>
            </div>
            <p className="font-bold text-gray-900">₦11,900</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trend;
