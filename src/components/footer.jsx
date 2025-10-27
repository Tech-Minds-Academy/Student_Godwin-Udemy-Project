import netapp from "../assets/netapp.png";
import w from "../assets/w.png";
import nasdaq from "../assets/nasdaq.png";
import event from "../assets/eventbrite.png";
import logo from "../assets/logo-udemy.svg";

function Footer() {
  return (
    <footer className="bg-[#2a2b3f] text-white mt-20">
      {/* --- Top Section --- */}
      <div className="py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base leading-relaxed">
            Top companies choose{" "}
            <span className="text-blue-300 underline underline-offset-2 hover:text-white transition">
              Udemy Business
            </span>{" "}
            to build in-demand career skills.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 opacity-90">
            <img
              src={netapp}
              alt="NetApp"
              className="h-8 md:h-10 object-contain"
            />
            <img
              src={nasdaq}
              alt="Nasdaq"
              className="h-8 md:h-10 object-contain"
            />
            <img src={w} alt="W" className="h-8 md:h-10 object-contain" />
            <img
              src={event}
              alt="Eventbrite"
              className="h-8 md:h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- Middle Section --- */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-12 border-t border-white/10">
        <h3 className="text-lg font-semibold mb-8 text-white">
          Explore top skills and Certifications
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-10">
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              In-demand careers
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Data Scientist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Full Stack Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cloud Engineer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project Manager
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Game Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  All Career Accelerators
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Web Development
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Javascript
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  React js
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Angular
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  java
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              It Certifications
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Amazon Aws
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AWS certified cloud practitioner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Az-900: Microsoft Azure Fundamentals
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  AWS certified solutions Architect -Associates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kubernetes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Leadership
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Learship
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mnagement skill
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Personal Productivity
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Emotional Intelligence
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Certification by skill
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Cybersecurity Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project Management Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cloud Certification
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Data Analysis Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hr Management Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  See all Certifications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Data Science
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  ChatGpt
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deep Learning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Communication
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Communication Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Presentaion Skills
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Public Speaking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Writing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Powerpoint
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Business Analytics intelligence
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Microsoft Excel
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sql
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Microsoft BI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Analysis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-[#202230] max-w-8xl mx-auto px-6 md:px-12 py-12 border-b border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-10">
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              About
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Discover Udemy
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Get the app
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Teach on Udemy
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Plans and Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Udemy for Business
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Udemy Business
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-white mb-4 font-semibold uppercase tracking-wide">
              Legal Accessibility
            </h5>
            <ul className="space-y-2 text-white text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hoverunderline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
           <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t w-full bg-[#202230]   text-sm text-white">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
            <p>© 2025 Udemy, Inc.</p>
          </div>
          <div className="mt-2 md:mt-0">
            <p className="hover:underline cursor-pointer">Cookie Settings</p>
          </div>
          <div className="mt-2 md:mt-0 flex items-center space-x-1">
            <i className="fa fa-globe"></i>
            <p>English</p>
          </div>
        </div>
    </footer>
  );
}
export default Footer;
