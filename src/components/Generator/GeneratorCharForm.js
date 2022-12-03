import React, { useContext } from "react";
import context from "../../userContext";
import style from "./GeneratorStyle.module.css";

const GeneratorCharForm = () => {
  const {
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
  } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharName("");
    setCharHead("none");
    setCharArms("none");
    setCharTorso("none");
    setCharLegs("none");

    const element = document.getElementById("map");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className={style.GeneratorCharForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.formControl}>
        <label>Character name</label>
        <input
          type="text"
          required
          value={charName}
          onChange={(e) => {
            setCharName(e.target.value);
          }}
        />
      </div>

      <div className={style.formControl}>
        <label>Head</label>
        <select
          name="head"
          required
          value={charHead}
          onChange={(e) => setCharHead(e.target.value)}
        >
          <option value="arrow">Arrow through head</option>
          <option value="scar">Scar across face</option>
          <option value="disfigured">Disfigured head</option>
          <option value="golem">Golem</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className={style.formControl}>
        <label>Torso</label>
        <select
          name="body"
          required
          value={charTorso}
          onChange={(e) => setCharTorso(e.target.value)}
        >
          <option value="heavy">Heavy armor</option>
          <option value="light">Light armor</option>
          <option value="arrow">Arrow through chest</option>
          <option value="shield">Shield on back</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className={style.formControl}>
        <label>Arms</label>
        <select
          name="arms"
          required
          value={charArms}
          onChange={(e) => setCharArms(e.target.value)}
        >
          <option value="sword">Sword</option>
          <option value="sword-shield">Sword and shield</option>
          <option value="bow">Bow</option>
          <option value="shield">Shield</option>
          <option value="none">None</option>
        </select>
      </div>

      <div
        className={style.formControl}
        onChange={(e) => setCharLegs(e.target.value)}
      >
        <label>Legs</label>
        <select name="legs" required value={charLegs}>
          <option value="arrow">Arrow through leg</option>
          <option value="light">Light armor</option>
          <option value="heavy">Heavy armor</option>
          <option value="wounded">Wounded</option>
          <option value="none">None</option>
        </select>
      </div>

      <button type="submit">Generate Character</button>
    </form>
  );
};

export default GeneratorCharForm;
