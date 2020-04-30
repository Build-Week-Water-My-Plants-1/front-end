import React, { useState, useEffect, useRef} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import PlantList from "./PlantList";
import PrivateRoute from './PrivateRoute'
import AddPlant from './AddPlant'

import {CardButton} from './Card'
import {Link} from 'react-router-dom'


const PlantDashBoard = (props) => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    //console.log('id in dashboard',props.id)
    axiosWithAuth()
      .get(`/api/${props.id}/plants`)
      .then((res) => {
        console.log("res from get plants",res);
        setPlant(res.data);
        props.setPlantList(res.data);
      })
      .catch((err) => console.log(err));
  },[props.plantList.length]);

  return (
    <div className='dashboard'>
      <h1>Your Plants</h1>
      <Link to="/add">

        <CardButton type="button">
          Add A Plant
        </CardButton>

        </Link>
      <div className='dash'>
      {plant.map((p) => (
        <PlantList plant={p} setPlantList={props.setPlantList} plantList={props.plantList}/>
      ))}
      </div>
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