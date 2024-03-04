import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Nav/NavBar";
import About from "./Component/User/About";
import Contact from "./Component/User/Contact";
import Profile from "./Component/User/Profile";
import Skills from "./Component/User/Skills";

function App() {
  return (
    <div>
    <NavBar />
    <Profile />
    <About />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
