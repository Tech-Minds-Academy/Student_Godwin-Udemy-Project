import img15 from "../assets/img15.png";

function TrendsReportPromo() {
  return (
    <section className="bg-white rounded-xl shadow-md border border-gray-200  p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-10 transition hover:shadow-lg overflow-hidden">
      {/* --- Text Section --- */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          Get the 2026 Global Learning & Skills Trends Report
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          If you or your organization are looking for help navigating change and AI transformation, 
          you’ll find a roadmap for action in our popular annual report.
        </p>
        <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition">
          Download now
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>

      {/* --- Image Section --- */}
      <div className="flex-1 flex justify-center">
        <img
          src={img15}
          alt="2026 Global Learning & Skills Trends Report cover"
          className="w-[800px] max-w-xl md:max-w-2xl lg:max-w-4xl rounded-lg object-contain"
        />
      </div>
    </section>
  );
}

export default TrendsReportPromo;
