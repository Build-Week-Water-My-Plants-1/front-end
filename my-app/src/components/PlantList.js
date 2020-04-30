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

  // const deletePlant = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .delete(`/api/${props.id}/plants/${props.plantID}`)
  //     .then((res) => {
  //       console.log({res});
  //       console.log(props.plantList);
  //       const newList = props.plantList.filter(plants => plants.id !== res.data)
  //         props.setPlantList(newList)
  //         console.log('setPlantList:',props.setPlantList)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deletePlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/${props.id}/plants/${props.plantID}`)
      .then((res) => {
        axiosWithAuth()
        .get(`/api/${props.id}/plants`)
        .then((res) => 
          props.setPlantList(res.data))
        
      })
      .catch((err) => {
        console.log(err);
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

    

 
  




