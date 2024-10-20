import Header from "./components/Header";
import Services from "./components/Services";
import TestimonialSection from "./components/TestimonialSection";
import CompanySection from "./components/CompanySection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Services />
      <TestimonialSection />
      <CompanySection />
      <Blog />
      <Footer />
    </>
  );
}

export default App
