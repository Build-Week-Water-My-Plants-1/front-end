import React from 'react'
import { connect } from "react-redux";
import { fetchPlants } from '../action';
import {axiosWithAuth} from '../utils/axiosWithAuth'

// const PlantList = (props) => {
//     axiosWithAuth()
//       .get(`/api/1/plants`)
//       .then((res) => console.log("res from get", res))
//       .catch((err) => console.log(err));
//       return PlantList.map(plants => (
//         <div key = {plants.id}>
//         <h2>Name: {plants.common_name}</h2>
//         <p>Species: {plants.scientific_name}</p>
//         <p>Maintanance: {plants.h2o_frequency}</p>
//     </div>
//       ))  
//   };

  
 

 const mapStateToProps = state => {
     console.log("state:",state)
     return {
         plants: state.plants,
     }
 }

 export default connect(
     mapStateToProps,
     { fetchPlants }
 ) (PlantList)
