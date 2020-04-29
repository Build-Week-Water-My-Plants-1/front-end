  
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PlantList = (props) => {
  console.log("props", props.getPlantID(props.plant.id));
  //props.plantID(props.plant.id)
  const { push } = useHistory();
  
  const handleSubmit = () => {
    props.getPlantID(props.plant.id);
    push("./update")
  };

  const deletePlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/${props.id}/plants/${props.plantID}`)
      .then((res) => {
        console.log({res});
        console.log(props.plantList);
        const newList = props.plant.filter(plants => `${plants.id}` !== res.data)
          props.setPlant(newList)
          
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      <h1>{props.plant.common_name}</h1>
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

    

 
  




