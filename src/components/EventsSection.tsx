import { FaRocket, FaStar, FaGithub, FaCode } from "react-icons/fa";

interface EventsSectionProps {
  transparentBackground?: boolean;
}

const EventsSection: React.FC<EventsSectionProps> = () => {
  const events = [
    {
      title: "Astrothon 2025",
      date: "June 15, 2025",
      description:
        "A 36-hour astronomy-themed hackathon where developers, designers, and space lovers unite to build galactic solutions.",
    },
    {
      title: "SAST Space Week",
      date: "July 22–28, 2025",
      description:
        "A week-long celebration of astrophysics with talks, workshops, and celestial observations.",
    },
    {
      title: "Open Source Orbit",
      date: "August 12, 2025",
      description:
        "A mini-conference for open-source contributors and tech enthusiasts to collaborate and launch new SAST projects.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Blurred background blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-gradient-to-tr from-[#2a0000] via-purple-700 to-blue-700 opacity-20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-gradient-to-br from-red-800 via-pink-600 to-purple-700 opacity-20 rounded-full blur-[120px]" />

      {/* Subtle blurred space & open source icons background */}
      <FaRocket
        className="absolute top-20 left-10 text-purple-700 opacity-10 blur-sm pointer-events-none"
        size={150}
      />
      <FaStar
        className="absolute top-40 right-20 text-yellow-400 opacity-10 blur-sm pointer-events-none"
        size={120}
      />
      <FaGithub
        className="absolute bottom-32 left-16 text-gray-500 opacity-10 blur-sm pointer-events-none"
        size={140}
      />
      <FaCode
        className="absolute bottom-20 right-24 text-blue-600 opacity-10 blur-sm pointer-events-none"
        size={130}
      />

      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-bold text-white mb-16 z-10 text-center tracking-wide"
        style={{ fontFamily: '"Nebula Hollow", sans-serif' }}
      >
        🚀 Upcoming Events
      </h2>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full z-10">
        {events.map((event, index) => (
          <div key={index} className="relative bg-white/3 rounded-2xl p-6">
            {/* Abstract floating shape */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-purple-700 opacity-30 rotate-45 rounded-3xl blur-md pointer-events-none" />

            <h3 className="text-xl font-semibold text-white mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-300 mb-3">{event.date}</p>
            <p className="text-sm text-white/80 leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
