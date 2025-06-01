import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Contact", "Login"];

const FloatingNavbar = () => {
  const [hovered, setHovered] = useState<string | null>("Login");
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (hovered && itemRefs.current[hovered] && containerRef.current) {
      const item = itemRefs.current[hovered]!;
      const container = containerRef.current;
      const { left: itemLeft, width } = item.getBoundingClientRect();
      const containerLeft = container.getBoundingClientRect().left;
      setHoverStyle({
        left: itemLeft - containerLeft,
        width,
      });
    }
  }, [hovered]);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="relative bg-black border border-white/10 px-4 py-2 rounded-full flex gap-4 backdrop-blur-md"
      >
        <AnimatePresence>
          <motion.div
            layout
            className="absolute top-1 bottom-1 rounded-full bg-white/8 "
            initial={false}
            animate={{
              left: hoverStyle.left,
              width: hoverStyle.width,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </AnimatePresence>

        {navItems.map((item) => (
          <div
            key={item}
            ref={(el) => {
              itemRefs.current[item] = el;
            }}
            onMouseEnter={() => setHovered(item)}
            onFocus={() => setHovered(item)}
            className="relative z-10 px-4 py-2 text-white text-sm cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavbar;
