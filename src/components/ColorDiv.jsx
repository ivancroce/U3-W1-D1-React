import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import myImage from "../assets/imgs/ictech_banner.png";

export default function ColorDiv() {
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
    <div style={{ backgroundColor: bgColor, padding: "2rem", color: "white" }}>
      <h1>Colore Dominante</h1>
      <img ref={imgRef} src={myImage} alt="Local" crossOrigin="anonymous" style={{ display: "none" }} />
    </div>
  );
}
