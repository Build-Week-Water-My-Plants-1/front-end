import React from "react";
import { connect } from "react-redux";
import { getPlantID, getID } from "../action/index";

const UpdatePlate = (props) => {
    // console.log(props.plantID)
  return (
    <div>
      <h1>Update Plants</h1>
      <div>{props.plantID}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  //console.log("map at update", state);
  return {
    id: state[0].id,
    plantID:state.plantID
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(UpdatePlate);
