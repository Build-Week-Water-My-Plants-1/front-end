import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const AddPlant = () => {
  const [addPlantData, setAddPlantData] = useState({
    plantname: "",
    maintenance: "",
    species: '',
  });
  const handleChanges = (event) => {
    setAddPlantData({ plantname: event.target.value });
    console.log(addPlantData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/register", this.state.AddPlantData)
    //   .then((res) => {
    //     console.log(res);
    //     this.props.history.push("/login");
    //   })
    //   .catch((err) => console.log({ err }));
  };

  return (
    <form>
      <h4>Looking good!</h4>
      <h3>Now let's add your first plant.</h3>
      <label htmlFor="plantname">Plant Name</label>
      <input id="plantname" name='plantname' type="text" placeholder='Plantname' value={addPlantData.plantname} onChange={handleChanges} />
      <label htmlFor="maintenance">Maintenance</label>
      <select className="size-options" id="maintenance" name="size">
        <option value="low" onChange={handleChanges}>
          Low
        </option>
        <option value="medium" onChange={handleChanges}>
          Medium
        </option>
        <option value="high" onChange={handleChanges}>
          High
        </option>
      </select>
      <label htmlFor="species">Species(optional)</label>
      <input id="species" name="species" type="text" placeholder="Species" value={addPlantData.species}/>
      <button type="submit">Next</button>
      <button type="skip">Skip</button>
    </form>
  );
};

export default AddPlant;
