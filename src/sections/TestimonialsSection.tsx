import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "These are hands-down the most comfortable sneakers I've ever trained in. Zero break-in time, perfect fit.",
      author: "Mark D., Toronto"
    },
    {
      id: 2,
      quote: "I'm a personal trainer and I recommend this gear to all my clients. It holds up through every type of workout.",
      author: "Lauren K., San Diego"
    },
    {
      id: 3,
      quote: "The shipping was lightning fast — and the packaging felt premium. You can tell they care about every detail.",
      author: "Andre V., Austin"
    }
  ];

  return (
    <section className="py-10">
      <div className="px-6">
        <h2 className="text-[96px] leading-[1.1] font-medium text-black tracking-[-4%] mb-6">
          From the Fam
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Testimonials Row */}
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={testimonial.id}>
              <div className="flex-1 p-6 flex flex-col justify-center gap-6">
                <blockquote className="text-3xl leading-[1.1] font-medium text-black tracking-[-4%]">
                  {testimonial.quote}
                </blockquote>
                
                <cite className="text-xl font-medium text-[#969696] not-italic">
                  {testimonial.author}
                </cite>
              </div>
              {index < testimonials.length - 1 && (
                <div className="w-px bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
