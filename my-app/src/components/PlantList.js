import React,{useState} from "react";
// import { fetchPlants } from "../action";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { getID } from "../action";

const PlantList = (props) => {
  const [plant, setPlant] = useState([]);
  axiosWithAuth()
    .get(`/api/${props.id}/plants`)
    .then((res) => setPlant(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <h1>Hello plants!</h1>
      {plant.map((p) => (
        <div>
          <h3>Name: {p.common_name}</h3>
          <h3>H2o_frequency: {p.h2o_frequency}</h3>
          <h3>Species: {p.scientific_name}</h3>
          <br/>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("map at plant list:", state[0].id);
  return {
    id: state[0].id,
  };
};
export default connect(mapStateToProps, { getID })(PlantList);
