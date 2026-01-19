// src/components/DashedGridBackground.tsx
import React from "react";

export default function DashedGridBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        // Using a light stone color for the grid lines
        backgroundImage: `
          linear-gradient(to right, #e7e5e4 1px, transparent 1px),
          linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px", // Increased size for a less busy look
        backgroundPosition: "0 0, 0 0",
        // The mask creates the dashed lines and the radial fade effect
        maskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 10px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 10px
          ),
          radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 70%)
        `,
        // Vendor prefixes for broad browser support
        WebkitMaskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 10px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 10px
          ),
          radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 70%)
        `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
