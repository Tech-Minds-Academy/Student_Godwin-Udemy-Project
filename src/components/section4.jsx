function Testimonials() {
  const testimonials = [
    {
      text: "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg",
      name: "Stack Overflow",
      info: "37,076 responses collected",
      link: "View Web Development courses →",
    },
    {
      text: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Alvin Lim",
      info: "Technical Co-Founder, CTO at Dimensional",
      link: "View this iOS & Swift course →",
    },
    {
      text: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "William A. Wachlin",
      info: "Partner Account Manager at Amazon Web Services",
      link: "View this AWS course →",
    },
    {
      text: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Ian Stevens",
      info: "Head of Capability Development, North America at Publicis Sapient",
      link: "Read full story →",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto  mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join others transforming their lives through learning
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white text-left flex flex-col justify-between"
          >
            <i className="fa fa-quote-left"></i>
            <p className="text-gray-800 italic mb-4">“{item.text}”</p>

            <div className="mt-auto">
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.info}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-violet-600 font-medium mt-4 inline-block hover:underline"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className=" mt-10">
        <a
          href="#"
          className="text-violet-600 font-semibold hover:underline inline-flex items-center gap-2"
        >
          View all stories <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
