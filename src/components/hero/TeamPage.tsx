"use client";

import React from "react";
import { FaUsers, FaHandshake, FaRocket, FaStar } from "react-icons/fa";

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Ankit Sharma",
      role: "Project Lead",
      bio: "Passionate about space exploration and leads the team with stellar ideas.",
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Soumitra Mishra",
      role: "Frontend Developer",
      bio: "Crafts beautiful UI and smooth user experiences for all cosmic projects.",
      photo: "https://i.pravatar.cc/150?img=31",
    },
    {
      name: "Riya Patel",
      role: "Backend Engineer",
      bio: "Builds robust APIs and manages data flow like a pro astronaut handles navigation.",
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "David Kim",
      role: "Open Source Evangelist",
      bio: "Connects the community and keeps the open-source spirit alive and thriving.",
      photo: "https://i.pravatar.cc/150?img=53",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-gradient-to-tr from-indigo-900 via-blue-900 to-cyan-800 opacity-20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 opacity-20 rounded-full blur-[120px]" />

      <FaUsers
        className="absolute top-20 left-16 text-indigo-700 opacity-10 blur-sm pointer-events-none"
        size={140}
      />
      <FaHandshake
        className="absolute bottom-28 right-20 text-pink-700 opacity-10 blur-sm pointer-events-none"
        size={130}
      />
      <FaRocket
        className="absolute top-40 right-24 text-cyan-600 opacity-10 blur-sm pointer-events-none"
        size={150}
      />
      <FaStar
        className="absolute bottom-36 left-24 text-purple-600 opacity-10 blur-sm pointer-events-none"
        size={120}
      />

      <h2
        className="text-5xl md:text-5xl font-bold text-white mb-16 z-10 text-center tracking-wide"
        style={{ fontFamily: '"Nebula Hollow", sans-serif' }}
      >
        Meet The Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl w-full z-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl backdrop-blur-md"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-28 h-28 rounded-full mb-6 border-2 border-white/20 object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-purple-300 mb-3 italic">{member.role}</p>
            <p className="text-sm text-white/80 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
