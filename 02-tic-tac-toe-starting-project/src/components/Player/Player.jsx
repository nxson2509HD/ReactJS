import { useState } from "react";

export default function Player({ name, symbol, isActive, onChange }) {
  const [isEditing, setEditing] = useState(false);
  const [nameChange, setNameChange] = useState(name);
  function hanleClick() {
    //setEditing(!isEditing); => schedule update in State
    setEditing((editing) => {
      return !editing;
    });
    isEditing ? onChange(symbol, nameChange) : undefined;
  }
  function handleChangeName(event) {
    setNameChange(event.target.value);
  }

  let playerName = <span className="player-name">{nameChange}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={nameChange}
        onChange={handleChangeName}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={hanleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
