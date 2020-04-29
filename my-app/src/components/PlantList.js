
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PlantList = (props) => {

  const deletePlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/${props.id}/plants/${props.plantID}`)
      .then((res) => {
        console.log("res from delete", res);
        // console.log(props.plantList);
        // const newList = props.plantList.filter(
        //   (plant) => plant.id !== res.data
        // );
        // console.log("new list", newList);
        //props.setPlantList(newList);
        push("/dashboard");
      })
      .catch((err) => {
        console.log("err from delete", err);
      });
  };

  return (
    <div>
      <h1>Name: {props.plant.common_name}</h1>
      <h1>H2O frequency: {props.plant.h2o_frequency}</h1>
      <h1>Species: {props.plant.scientific_name}</h1>
      <button onClick={handleSubmit}>Edit</button>
      <button onClick={deletePlant}>Delete</button>
    </div>
  );
};


const mapStateToProps = (state) => {
  //console.log("map at plant list:", state[0]);
  return {
    id: state[0].id,
    plantID: state.plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(PlantList);
