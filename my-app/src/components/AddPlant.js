import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

const AddPlant = () => {
  const { id } = useParams();
  const [addPlantData, setAddPlantData] = useState({
    id: "",
    common_name: "",
    scientific_name: "",
  });
  const handleChanges = (event) => {
    setAddPlantData({
      ...addPlantData,
      id: 3,
      [event.target.name]: event.target.value,
    });
    console.log("addPlantData", addPlantData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/3/plants`, addPlantData)
      .then((res) => {
        // setAddPlantData({
        //   id: parseInt(addPlantData.id) + 1,
        // });
        console.log(res);
        //this.props.history.push("/login");
      })
      .catch((err) => console.log({ err, addPlantData }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Looking good!</h4>
      <h3>Now let's add your first plant.</h3>
      <label htmlFor="plantname">Plant Name</label>
      <input
        id="common_name"
        name="common_name"
        type="text"
        placeholder="Plant name"
        value={addPlantData.common_name}
        onChange={handleChanges}
      />
      <label htmlFor="scientific_name">Scientific Name</label>
      <input
        id="scientific_name"
        name="scientific_name"
        type="text"
        placeholder="Scientific name"
        value={addPlantData.scientific_name}
        onChange={handleChanges}
      />
      <button type="submit">Next</button>
      <button type="skip">Skip</button>
      {/* <select className="size-options" id="maintenance" name="size">
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
      <label htmlFor="scientific_name">Scientific Name</label> */}
    </form>
  );
};

export default AddPlant;
