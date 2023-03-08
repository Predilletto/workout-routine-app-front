import React, { useState } from "react";

export default function Exercise() {
  const [maxRep, setMaxRep] = useState(0);
  const [MaxWeight, setMaxWeight] = useState(0);
  const [obs, setObs] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(maxRep, MaxWeight, obs);
  }

  return (
    <div>
      <h1>Title Example here</h1>
      <h2> Example: </h2>
      <img
        src="https://media.giphy.com/media/4KkSbPnZ5Skec/giphy.gif"
        alt="example"
        width={300}
        height={300}
      />
      <h2> Muscle Group </h2>
      <p> Legs </p>
      <img
        width={200}
        height={200}
        src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-leg-press.png?resize=768%2C768&ssl=1"
      />
      <form onSubmit={handleSubmit}>
        <h2> Description: </h2>
        <p> Homer is doing the thing with the legs right here haha :D </p>
        <label htmlFor="MaxRep">Max Rep </label>
        <input type="number" onChange={(e) => setMaxRep(e.target.value)} />
        <label htmlFor="MaxWeight">Max Weight</label>
        <input type="number" onChange={(e) => setMaxWeight(e.target.value)} />
        <label htmlFor="Obs"> Observações </label>
        <input type="text" onChange={(e) => setObs(e.target.value)} />
        <button> submit </button>
      </form>
    </div>
  );
}
