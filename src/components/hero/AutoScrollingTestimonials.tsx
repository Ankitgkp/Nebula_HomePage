import React, { useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  company?: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    id: 1,
    text: "...e design and the insights it provide. It is",
    name: "Anonymous",
    title: "Anonymous",
  },
  {
    id: 2,
    text: "Your product is freaking amazing! I finally found something perfect for me to enhance my advanced English to the next level. Stellar work to you all!",
    name: "Maria Olimova",
    title: "Anonymus",
  },
  {
    id: 3,
    text: "I've been using Fluently on my Mac for over two months now, and I've noticed significant improvements in my English",
    name: "Rohit Kumar",
    title: "Software Engineer @Erdonix",
  },
  {
    id: 4,
    text: "I really love the app, it's design insights that fluently provide. It's commendable.",
    name: "Harshit Gotherwal",
    title: "Student @University College London",
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    id: 5,
    text: "...to improve my TOEFL exam. I ...en the application.",
    name: "Anonymous",
    title: "Anonymous",
  },
  {
    id: 6,
    text: "I just wanna tell you that I love your product!",
    name: "Rafael Matos",
    title: "Product Manager @Evolt",
  },
  {
    id: 7,
    text: "Fluently gives really good feedback on design and very natural (no additional actions).",
    name: "Jeesun",
    title: "Software developer @Stellar",
  },
  {
    id: 8,
    text: "The AI-powered suggestions have transformed my writing style completely. Amazing tool!",
    name: "Sarah Johnson",
    title: "Content Writer @TechCorp",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="flex-shrink-0 w-80 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mx-4">
      <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[4rem]">
        {testimonial.text}
      </p>
      <div>
        <h4 className="text-white font-medium text-sm mb-1">
          {testimonial.name}
        </h4>
        <p className="text-slate-400 text-xs">{testimonial.title}</p>
      </div>
    </div>
  );
};

const ScrollingRow: React.FC<{
  testimonials: Testimonial[];
  direction: "left" | "right";
}> = ({ testimonials, direction }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = direction === "left" ? 0.3 : -0.3;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (direction === "left" && scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        } else if (direction === "right" && scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = maxScroll;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction]);

  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-hidden scrollbar-hide mb-6"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex min-w-max">
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

const AutoScrollingTestimonials: React.FC = () => {
  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          What the team has to say
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Hear from our users and team members who experienced it first-hand
        </p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-black via-black/90 via-black/70 via-black/40 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-black via-black/90 via-black/70 via-black/40 to-transparent z-10 pointer-events-none"></div>

        <div className="space-y-0">
          <ScrollingRow testimonials={testimonialsRow1} direction="left" />
          <ScrollingRow testimonials={testimonialsRow2} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingTestimonials;
