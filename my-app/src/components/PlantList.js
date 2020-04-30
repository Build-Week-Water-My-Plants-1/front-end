import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getID, getPlantID } from "../action";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import styled from "styled-components";
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./Card";
import Button from './Header'

const PlantList = (props) => {

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
        console.log("res from delete", res);
        // console.log(res.config.url.includes(props.plant.id));
        // props.plantList.filter(
        //   (plant) => console.log(plant.id)
        // );
        const newList = props.plantList.filter(
          (plant) => !res.config.url.includes(plant.id)
        );
        //console.log(newList)
        props.setPlantList(newList);
        push("/dashboard");
      })
      .catch((err) => {
        console.log("err from delete", err);
      });
  };

  //DASHBOARD STYLING

  return (
    <div>
      <CardWrapper>
        <h2>{props.plant.common_name}</h2>
        
        <CardBody>-Maintenance-</CardBody> <h2>{props.plant.h2o_frequency}</h2>
        
         <CardBody>-Species-</CardBody> <h2>{props.plant.scientific_name}</h2>
        
        <CardButton onClick={handleSubmit}>Edit
        </CardButton>
        <br></br>
        <CardButton onClick={deletePlant}>Delete
        </CardButton>

      </CardWrapper>
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
