import "./App.css";
import Nav from "./components/NavBar/Nav.js";
import Hero from "./components/Hero/Hero.js";
import Footer from "./components/Footer/Footer.js";
import Generator from "./components/Generator/Generator";
import Map from "./components/Map/Map";

import { useState } from "react";
import context from "./userContext";
// useContext to get state from generator to map

function App() {
  const [mapWidth, setMapWidth] = useState(5);
  const [currentMenu, setCurrentMenu] = useState("maze");
  const [dunName, setDunName] = useState("Hall of Nazareth");
  const [dunSeed, setDunSeed] = useState(138423);
  const [charName, setCharName] = useState("Ainz Ooal Gown");
  const [charHead, setCharHead] = useState("none");
  const [charTorso, setCharTorso] = useState("none");
  const [charArms, setCharArms] = useState("none");
  const [charLegs, setCharLegs] = useState("none");
  return (
    <context.Provider
      value={{
        mapWidth,
        setMapWidth,
        currentMenu,
        setCurrentMenu,
        dunName,
        setDunName,
        dunSeed,
        setDunSeed,
        charName,
        setCharName,
        charHead,
        setCharHead,
        charTorso,
        setCharTorso,
        charLegs,
        setCharLegs,
        charArms,
        setCharArms,
      }}
    >
      <Nav />
      <Hero />
      <Generator />
      <Map width="5" />
      <Footer />
    </context.Provider>
  );
}

export default App;
