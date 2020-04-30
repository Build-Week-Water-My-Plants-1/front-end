import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PlantList = (props) => {
  //console.log("props", props.getPlantID(props.plant.id));

  const { push } = useHistory();
  const handleSubmit = () => {
    props.getPlantID(props.plant.id);
    push("./update");
  };

  const deletePlant = (e) => {
    e.preventDefault();
    props.getPlantID(props.plant.id);
    console.log("props", props.getPlantID(props.plant.id));
    axiosWithAuth()
      .delete(`/api/${props.id}/plants/${props.plant.id}`)
      .then((res) => {
        // console.log("res from delete", res.config.url);
        // console.log(res.config.url.includes(props.plant.id));
        const newList = props.plantList.filter(
          (plant) => !res.config.url.includes(plant.id)
        );
        props.setPlantList(newList);
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
  //console.log("map at plant list:", state[0].plantID);
  return {
    id: state[0].id,
    plantID: state[0].plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(PlantList);
