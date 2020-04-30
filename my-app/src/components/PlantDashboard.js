import React, { useState, useEffect } from "react";
// import { fetchPlants } from "../action";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import PlantList from "./PlantList";

const PlantDashBoard = (props) => {
  //console.log(props);
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/${props.id}/plants`)
      .then((res) => {
        setPlant(res.data);
        props.setPlantList(res.data);
      })
      .catch((err) => console.log(err));
  }, [setPlant]);
  //console.log(plant);

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
  //console.log("map at plant list:", state);
  return {
    id: state[0].id,
    plantID: state.plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(PlantDashBoard);
