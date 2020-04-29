import React from 'react'
import { connect } from "react-redux";
import { fetchPlants } from '../action'

 const PlantList = (props => {
    // return (
    //     {fetchPlants.map(plants => (
    //         <div key = {plants.id}>
    //             <h2>{plants.common_name}</h2>
    //             <p>{plants.scientific_name}</p>
    //             <p>{plants.h2o_frequency}</p>
    //         </div>
    //     ))}
    // )
 }

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
