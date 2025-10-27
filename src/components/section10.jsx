import img16 from '../assets/img16.png';

function PopularSkillsAndPromo() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* --- Popular Skills --- */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Popular skills on Udemy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* --- AI --- */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">AI</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-purple-700 cursor-pointer">
                  ChatGPT <span className="block text-gray-500">467,047 learners</span>
                </li>
              </ul>
              <a
                href="#"
                className="text-purple-700 text-sm mt-3 inline-block hover:underline font-medium"
              >
                Show all trending skills →
              </a>
            </div>

            {/* --- Development --- */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Development</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-purple-700 cursor-pointer">
                  Python <span className="block text-gray-500">4,367,047 learners</span>
                </li>
                <li className="hover:text-purple-700 cursor-pointer">
                  Web Development <span className="block text-gray-500">3,219,036 learners</span>
                </li>
                <li className="hover:text-purple-700 cursor-pointer">
                  Data Science <span className="block text-gray-500">2,312,098 learners</span>
                </li>
              </ul>
            </div>

            {/* --- Design --- */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Design</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-purple-700 cursor-pointer">
                  Blender <span className="block text-gray-500">863,198 learners</span>
                </li>
                <li className="hover:text-purple-700 cursor-pointer">
                  Graphic Design <span className="block text-gray-500">1,367,198 learners</span>
                </li>
                <li className="hover:text-purple-700 cursor-pointer">
                  User Experience (UX) <span className="block text-gray-500">476,123 learners</span>
                </li>
              </ul>
            </div>

            {/* --- Business --- */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Business</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-purple-700 cursor-pointer">
                  PMI Project Management Professional (PMP)
                  <span className="block text-gray-500">2,367,198 learners</span>
                </li>
                <li className="hover:text-purple-700 cursor-pointer">
                  PMI Certified Associate in Project Management (CAPM)
                  <span className="block text-gray-500">1,367,198 learners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Promo Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-10  rounded-xl p-8 hover:shadow-md transition">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 leading-snug">
              Booz Allen Hamilton unlocks talent retention and productivity
              through upskilling
            </h3>

            <ul className="text-gray-700 text-sm md:text-base space-y-2">
              <li>
                <strong className="text-purple-700">93%</strong> retention rate among participating employees
              </li>
              <li>
                <strong className="text-purple-700">66%</strong> increase in productivity
              </li>
            </ul>

            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md transition">
              Read full story
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src={img16}
              alt="Upskilling success story"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularSkillsAndPromo;
