import React, { useState } from "react";

export default function CreateSheet() {
  const [muscleGroup, setMuscleGroup] = useState("");
  const [dayValue, setDayValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(muscleGroup, dayValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="muscle-group">Muscle Group</label>
        <input
          type="text"
          placeholder="Muscle Group of the day"
          onChange={(e) => setMuscleGroup(e.target.value)}
        />
        <label htmlFor="day">Day </label>
        <select
          id="day"
          value={dayValue}
          onChange={(e) => setDayValue(e.target.value)}
        >
          <option value="Domingo">Domingo</option>
          <option value="Segunda">Segunda</option>
          <option value="Terça">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sabado">Sabado</option>
        </select>
        <button> Create </button>
      </form>
    </div>
  );
}
