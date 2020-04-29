import React, {useState} from "react";
// import { fetchPlants } from "../action";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID } from "../action";

const PlantList = (props) => {
    const [plants, setPlants] = useState([]);
  axiosWithAuth()
    .get(`/api/${props.id}/plants`)
    .then((res) => {
        setPlants(res.data);
    })
    .catch((err) => console.log(err));
    return (
    <div>
        <div>
            <h1>Hello Plants!</h1>
            {plants.map(p => 
            <div key = {p.id}>
            <h3>Name: {p.common_name}</h3>
            <h3>Species: {p.scientific_name}</h3>
            <h3>Maintanance: {p.h2o_frequency}</h3>
            </div>
            )}
        </div>
    </div>
    )
};



const mapStateToProps = (state) => {
  console.log("map at plant list:", state[0].id);
  return {
    id: state[0].id,
  };
};
export default connect(mapStateToProps, { getID })(PlantList);
