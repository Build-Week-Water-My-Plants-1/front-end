import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from "yup";

/////////////Styling/////////////////
const WrapperDiv = styled.div`
  width: 20%;
  height: 60%;
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

const formSchema = Yup.object().shape({
  common_name: Yup.string().required(),
  scientific_name: Yup.string().required(),
});

////////////////AddPlant function////////////////////
const AddPlant = (props) => {
  const [addPlantData, setAddPlantData] = useState({
    id: Date.now(),
    common_name: "",
    scientific_name: "",
    h2o_frequency: "1",
  });
  const { push } = useHistory();

  const handleChanges = (event) => {
    event.persist();
    ifValid(event);
    //to get what part change ex:fname or lname...
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    setFormState(newFormData);
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
        push("/dashboard");
      })
      .catch((err) => console.log({ err, addPlantData }));
  };
  const [errors, setErrors] = useState({
    common_name: "",
    scientific_name: "",
  });
  const [formState, setFormState] = useState({
    common_name: "",
    scientific_name: "",
  });
  const [buttonOn, setButtonOn] = useState(false);
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonOn(!valid);
    });
  }, [formState]);

  const ifValid = (e) => {
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    Yup.reach(formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="center-box">
      <WrapperDiv>
        <Form>
          <h4>Looking good!</h4>
          <h3>Now let's add your plant.</h3>
          <Label htmlFor="common_name">Plant Name (required)</Label>
          <input
            id="common_name"
            name="common_name"
            type="text"
            placeholder="Plant Name"
            value={addPlantData.common_name}
            onChange={handleChanges}
            required
          />
          {errors.common_name.length > 0 ? errors.common_name : null}

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
          <Label htmlFor="scientific_name">Species (required)</Label>
          <input
            id="scientific_name"
            name="scientific_name"
            type="text"
            placeholder="Species"
            value={addPlantData.scientific_name}
            onChange={handleChanges}
            required
          />
          {errors.scientific_name.length > 0 ? errors.scientific_name : null}

          <Button disabled={buttonOn} type="submit" onClick={handleSubmit}>
            Next
          </Button>
          <SkipButton type="skip" onClick={handleSkip}>
            Skip
          </SkipButton>
        </Form>
      </WrapperDiv>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    id: state[0].id,
  };
};
export default connect(mapStateToProps, {})(AddPlant);
