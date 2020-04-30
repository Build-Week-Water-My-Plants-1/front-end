import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import PlantList from "./PlantList";

const PlantDashBoard = (props) => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    console.log('id in dashboard',props.id)
    axiosWithAuth()
      .get(`/api/${props.id}/plants`)
      .then((res) => {
        console.log("res from get plants",res);
        setPlant(res.data);
        props.setPlantList(res.data);
      })
      .catch((err) => console.log(err));
  },[props.plantList]);

  return (
    <div>
      <h1>Hello plants dashboard!</h1>
      {plant.map((p) => (
        <PlantList plant={p} setPlantList={props.setPlantList} plantList={props.plantList}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state[0].id,
    plantID: state[0].plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(PlantDashBoard);
