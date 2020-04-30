import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


/////////////Styling/////////////////
const WrapperDiv = styled.div`
  width: 20%;
  height: 80%;
  padding: 2% 5% 5% 5%;
  background-color: #f1f3f2;
  background: rgba(0.75);
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const H4 = styled.h4`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  margin: 0 0 10% 0;
`;

const Label = styled.label`
  text-align: left;
  font-weight: 300;
  font-size: 0.8rem;
  padding-top: 5%;
`;

const Button = styled.button`
  height: 2rem;
  font-size: 0.9rem;
  background-color: #235b2d;
  color: white;
  border-radius: 4px;
  margin-top: 15%;
`;

const SkipButton = styled.button`
  padding-top: 3%;
  width: 70px;
`;

////////////////AddPlant function////////////////////
const AddPlant = (props) => {
  const [addPlantData, setAddPlantData] = useState({
    id: Date.now(),
    common_name: "",
    scientific_name: "",
    h2o_frequency: "2",
  });
  const { push } = useHistory();

  const handleChanges = (event) => {
    event.persist();

    let value = event.target.value;

    setAddPlantData({
      ...addPlantData,
      [event.target.name]: value,
    });

    console.log("addPlantData", addPlantData);
  };

  const handleSkip = (e) => {
    e.preventDefault();
    push("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/${props.id}/plants`, addPlantData)
      .then((res) => {
        //console.log(res);
        push("/dashboard");
      })
      .catch((err) => console.log({ err, addPlantData }));
  };

  return (
    <WrapperDiv>
      <Form>
        <h4>Looking good!</h4>
        <h3>Now let's add your first plant.</h3>
        <Label htmlFor="common_name">Plant Name</Label>
        <input
          id="common_name"
          name="common_name"
          type="text"
          placeholder="Plant Name"
          value={addPlantData.common_name}
          onChange={handleChanges}
        />
        <Label htmlFor="h2o_frequency">Maintenance</Label>
        <select
          className="size-options"
          id="h2o_frequency"
          name="h2o_frequency"
          onChange={handleChanges}
          
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Label htmlFor="scientific_name">Species(optional)</Label>
        <input
          id="scientific_name"
          name="scientific_name"
          type="text"
          placeholder="Species"
          value={addPlantData.scientific_name}
          onChange={handleChanges}
        />
        <Button type="submit" onClick={handleSubmit}>
          Next
        </Button>
        <SkipButton type="skip" onClick={handleSkip}>
          Skip
        </SkipButton>
      </Form>
    </WrapperDiv>
  );
};
const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    id: state[0].id,
  };
};
export default connect(mapStateToProps, {})(AddPlant);
