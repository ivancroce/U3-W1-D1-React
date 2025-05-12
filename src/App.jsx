import "./App.css";
import logo from "./assets/imgs/ictech_logo.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import heroImg from "./assets/imgs/ictech_banner.png";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* crea un Header, Section, Footer, con dentro btn e img */}
      <Header imageSrc={logo} />
      <Hero imageSrc={heroImg} />
      {/* <ButtonComponent text="More Info" /> */}
      <ImageComponent
        imageSrc={
          "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        imageAlt="Apple"
      />
      <Footer />
    </>
  );
}

export default App;
