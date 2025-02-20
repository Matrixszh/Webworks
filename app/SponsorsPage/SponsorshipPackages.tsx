import React from 'react';

const WebsitePlans = () => {
  const plans = [
    {
      number: 1,
      badge: "STARTER",
      desc: "Choose from our professionally designed templates and get a sleek, responsive website up and running quickly. Ideal for individuals and small businesses looking for an affordable and effective online presence."
    },
    {
      number: 2,
      badge: "CUSTOM",
      desc: "Get a fully custom-designed website built from scratch to match your brand’s unique identity. This includes tailored UI/UX, optimized performance, and a personalized design process to ensure your site stands out."
    },
    {
      number: 3,
      badge: "ADVANCED",
      desc: "A custom multi-page website with dynamic functionalities, such as contact forms, blogs, e-commerce, or other interactive features. Perfect for businesses that need a powerful and scalable web solution."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white p-4 sm:p-6 md:p-8">
      {/* Navigation */}
      <nav className="flex justify-center items-center gap-2 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-10 md:mb-12">
        <span>WebWorks</span>
        <span className="text-[#9e0cca]">X</span>
        <span>Packages</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">Our Offerings</h1>
      </div>

      {/* Package Cards */}
      <div className="max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-[#0A0A0A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative shadow-[0_0_60px_rgba(128,0,255,0.2)]">
            {/* Plan Header */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl font-serif">
                <span className="text-white/80">PLAN</span>{" "}
                <span>{plan.number}</span>
              </h2>
              <span className="bg-[#9e0cca] px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light">
                {plan.badge}
              </span>
            </div>

            {/* Description */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <p className="text-base sm:text-lg md:text-xl text-center text-white/90 leading-relaxed">
                {plan.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitePlans;
