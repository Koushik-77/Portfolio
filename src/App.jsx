import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react"; 
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Sections/Home";
import { About } from "./components/Sections/About";
import { Projects } from "./components/Sections/Projects";
import { Socials } from "./components/Sections/Socials";
import { Contact } from "./components/Sections/Contact";
import ChefApp from "./claudechef/App"; 

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  return (
    <>
      {showNavbar && (
        <>
          <Navbar />
          <MobileMenu />
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Socials />
              <Contact />
            </>
          }
        />
        <Route path="/chef" element={
          <div className="chefclaude">
            <ChefApp />
          </div>
        } />
      </Routes>
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
