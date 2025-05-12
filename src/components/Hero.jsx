import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import ButtonComponent from "./ButtonComponent";

const Hero = ({ imageSrc }) => {
  const imgRef = useRef(null);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();

    if (img && img.complete) {
      const color = colorThief.getColor(img);
      setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    } else if (img) {
      img.addEventListener("load", () => {
        const color = colorThief.getColor(img);
        setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      });
    }
  }, []);

  return (
    <section className="hero-section" style={{ backgroundColor: bgColor }}>
      <div className="hero-container">
        <img className="hero-image" ref={imgRef} src={imageSrc} alt="IC Tech Banner" crossOrigin="anonymous" />

        <ButtonComponent text="Proceed" className="btn-primary" />
      </div>
    </section>
  );
};

export default Hero;
