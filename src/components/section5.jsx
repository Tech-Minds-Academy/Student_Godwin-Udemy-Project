import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

function Certifications() {
  return (
    <section
      style={{ backgroundColor: "oklch(25.65% 0.0265 278.04deg)" }}
      className="py-16 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* --- Left Side: Text --- */}
        <div className="md:w-1/3 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Get certified and get ahead in your career
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Prep for certifications with comprehensive courses, practice tests,
            and special offers on exam vouchers.
          </p>
          <a
            href="#"
            className="text-white font-semibold inline-flex items-center gap-2 hover:underline"
          >
            Explore Certifications and Vouchers{" "}
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>

        {/* --- Right Side: Cards Grid --- */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center mx-auto">
          {/* Card 1 */}
          <div
            className="rounded-2xl h-auto overflow-hidden shadow-lg text-center p-6 w-full max-w-xs"
            style={{ backgroundColor: "oklch(37.75% 0.0361 278.19deg)" }}
          >
            <img src={img5} alt="Comptia" className="mx-auto mb-4 w-40" />
            <h5 className="text-white text-xl font-semibold">CompTIA</h5>
            <p className="text-gray-300 text-sm mt-2">
              Cloud, Networking, Cybersecurity
            </p>
          </div>
          {/* Card 2 */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg text-center p-6 w-full h-auto max-w-xs"
            style={{ backgroundColor: "oklch(37.75% 0.0361 278.19deg)" }}
          >
            <img src={img6} alt="Comptia" className="mx-auto mb-4 w-40" />
            <h5 className="text-white text-xl font-semibold">AWS</h5>
            <p className="text-gray-300 text-sm mt-2">
              Cloud, AI, Coding, Networking,
            </p>
          </div>
          {/* Card 3 */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg text-center h-auto p-6 w-full max-w-xs"
            style={{ backgroundColor: "oklch(37.75% 0.0361 278.19deg)" }}
          >
            <img src={img7} alt="Comptia" className="mx-auto mb-4 w-40" />
            <h5 className="text-white text-xl font-semibold">PMI</h5>
            <p className="text-gray-300 text-sm mt-2">
              Project and Project management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Certifications;
