import { useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar onNavigate={setPage} activePage={page} />
        <div className="content-grid">
          <main>
            {page === "home" && <Home />}
            {page === "courses" && <Courses />}
            {page === "contact" && <Contact />}
          </main>
          <aside>
            <Sidebar />
          </aside>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
