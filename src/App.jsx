import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Job from "./Components/JobDiv/Job";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import { useState, useEffect } from "react";
const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("clicked");
  };
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
