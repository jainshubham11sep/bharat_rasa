import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { height: 38, iconW: 24, iconH: 42, fontSize: "0.78rem", lineH: "0.9rem" },
  md: { height: 46, iconW: 29, iconH: 52, fontSize: "0.88rem", lineH: "1.05rem" },
  lg: { height: 56, iconW: 36, iconH: 64, fontSize: "1rem",    lineH: "1.2rem" },
};

export default function BrandLogo({ size = "md" }: BrandLogoProps) {
  const { height, iconW, iconH, fontSize, lineH } = sizes[size];

  return (
    <span className="brand-rect" style={{ height }}>
      {/* Icon — portrait image, dark bg so white mark is visible */}
      <span
        className="brand-rect-icon"
        style={{ width: iconW, height: iconH }}
      >
        <Image
          src="/images/bi-logo.png"
          alt="Bharat Innovations"
          fill
          style={{ objectFit: "contain" }}
          sizes={`${iconW}px`}
        />
      </span>

      <span className="brand-rect-divider" />

      <span className="brand-rect-text">
        <span className="brand-rect-line1" style={{ fontSize, lineHeight: lineH }}>Bharat</span>
        <span className="brand-rect-line2" style={{ fontSize, lineHeight: lineH }}>Innovations</span>
      </span>
    </span>
  );
}
