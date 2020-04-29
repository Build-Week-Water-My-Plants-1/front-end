import React from "react";
import { connect } from "react-redux";
import { getPlantID, getID } from "../action/index";

const UpdatePlate = (props) => {
  return (
    <div>
      <h1>Update Plants</h1>
      <div>{props.plantID}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("map at plant list:", state[0]);
  return {
    id: state[0].id,
    plantID:state[0].plantID
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(UpdatePlate);
