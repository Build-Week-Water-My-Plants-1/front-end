import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";

const PlantList = (props) => {
  //console.log("props",props.getPlantID(props.plant.id));
  //props.plantID(props.plant.id)
  const {push} = useHistory()
  props.getPlantID(props.plant.id);
  return (
    <div>
      <h1>{props.plant.common_name}</h1>
      <button onClick={()=>push('./update')}>Edit</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log("map at plant list:", state[0]);
  return {
    id: state[0].id,
    plantID: state[0].plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(PlantList);
