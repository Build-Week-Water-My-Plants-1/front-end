import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPlantID, getID } from "../action/index";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialItem = {
  common_name: "",
  scientific_name: "",
  h2o_frequency: "",
};

const UpdatePlate = (props) => {
  // console.log(props.plantID)
  const [plant, setPlant] = useState(initialItem);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/${props.id}/plants/${props.plantID}`)
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err));
  }, [props.plantID]);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;
    setPlant({
      ...plant,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/${props.id}/plants/${props.plantID}`, plant)
      .then((res) => {
        props.setPlantList([...props.plantList], res.data);
        //console.log(props.movieList);
        push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update Plants</h1>
      <form>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={plant.common_name}
        />
        <br />
        <input
          type="number"
          name="frequency"
          onChange={changeHandler}
          placeholder="frequency"
          value={plant.h2o_frequency}
        />
        <div className="baseline" />
        <input
          type="text"
          name="scientific_name"
          onChange={changeHandler}
          placeholder="scientific_name"
          value={plant.scientific_name}
        />
        <div className="baseline" />
        <button onClick={handleSubmit}>Done</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  //console.log("map at update", state);
  return {
    id: state[0].id,
    plantID: state.plantID,
  };
};
export default connect(mapStateToProps, { getID, getPlantID })(UpdatePlate);
