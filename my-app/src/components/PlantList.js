import React from "react";
// import { fetchPlants } from "../action";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID } from "../action";

const PlantList = (props) => {
  axiosWithAuth()
    .get(`/api/${props.id}/plants`)
    .then((res) => console.log("res from get", res))
    .catch((err) => console.log(err));
  return <h1>hello</h1>;
};


const mapStateToProps = (state) => {
  console.log("map at plant list:", state[0].id);
  return {
    id: state[0].id,
  };
};
export default connect(mapStateToProps, { getID })(PlantList);
