export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Grow your team's skills and your business
        </h2>
        <p className="text-gray-600 mt-3">
          Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
        </p>
      </div>

      {/* --- Pricing Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Team Plan */}
        <div className=" border border-t-8 border-t-purple-500  rounded-xl shadow-sm hover:shadow-md transition p-6">
          <h3 className="text-xl font-semibold mb-2">Team Plan</h3>
          <p className="text-gray-600 mb-4 flex items-center gap-2">
            <i className="fa fa-users text-gray-500"></i>
            2 to 50 people – For your team
          </p>
          <button className="text-purple-600 border border-purple-600 px-6 py-2 rounded-md font-semibold hover:cursor-pointer transition mb-4">
            Try it free
          </button>
          <p className="font-semibold">₦18,000 a month per user</p>
          <p className="text-sm text-gray-500 mb-4">Billed annually. Cancel anytime.</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Access to 13,000+ top courses</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Certification prep</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Goal-focused recommendations</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> AI-powered coaching</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Analytics and adoption reports</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className=" border border-t-8 border-t-purple-700 rounded-xl shadow-sm hover:shadow-md transition p-6">
          <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
          <p className="text-gray-600  mb-4 flex items-center justify-center gap-2">
            <i className="fa fa-building text-gray-500"></i>
            More than 20 people – For your whole organization
          </p>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-purple-50 transition mb-4">
            Request a demo
          </button>
          <p className="font-semibold mb-2">Contact sales for pricing</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Access to 30,000+ top courses</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i>Certification prep</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Goal-focused recommendations</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> AI-powered coaching</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Advanced analytics and insights</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Dedicated customer success team</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> International course collection (15 languages)</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Customizable content</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Hands-on tech training add-on</li>
            <li className="inlime-flex items-center"><i className="fa fa-check-circle "></i> Strategic implementation services</li>
          </ul>
        </div>

        {/* AI Fluency */}
        <div className=" border border-t-8 border-t-black rounded-xl shadow-sm hover:shadow-md transition p-6">
          <h3 className="text-xl font-semibold mb-2">AI Fluency</h3>
          <p className="text-gray-600 mb-4 flex items-center gap-2">
            <i className="fa fa-robot text-gray-500"></i>
            From AI foundations to Enterprise transformation
          </p>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-purple-50 transition mb-4">
            Contact Us
          </button>

          <h4 className="font-semibold mb-2">AI Readiness Collection</h4>
          <p className="text-sm text-gray-600 mb-4">
            <i className="fa fa-users text-gray-500"></i> More than 100 people
            <br />
            Build org-wide AI fluency fast with 50 curated courses + AI Assistant to accelerate learning.
          </p>

          <h4 className="font-semibold mb-2">AI Growth Collection</h4>
          <p className="text-sm text-gray-600">
            Scale AI and technical expertise with 800+ specialized courses and 30+ role-specific learning paths.
          </p>
        </div>
      </div>
    </section>
  );
}
