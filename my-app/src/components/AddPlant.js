import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

/////////////Styling/////////////////
const WrapperDiv = styled.div`
  width: 20%;
  height: 80%;
  padding: 2% 5% 5% 5%;
  background-color: #F1F3F2;
  background: rgba(0.75);
  display: flex;
  flex-direction: column;
  font-family: 'Nunito Sans', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const H4 = styled.h4`
font-family: 'Nunito Sans', sans-serif;
font-weight: 400;
margin: 0 0 10% 0;
`;

const Label = styled.label`
text-align: left;
font-weight: 300;
font-size: .8rem;
padding-top: 5%;
`;

const Button = styled.button`
height: 2rem;
font-size: .9rem;
background-color: #235B2D;
color: white;
border-radius: 4px;
margin-top: 15%;
`;


////////////////AddPlant function////////////////////
const AddPlant = () => {
  const [addPlantData, setAddPlantData] = useState({
    plantname: "",
    maintenance: "",
    species: '',
  });
  const handleChanges = (event) => {
    setAddPlantData({ plantname: event.target.value });
    console.log(addPlantData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/register", this.state.AddPlantData)
    //   .then((res) => {
    //     console.log(res);
    //     this.props.history.push("/login");
    //   })
    //   .catch((err) => console.log({ err }));
  };

  return (
    <WrapperDiv>
<Form onSubmit={handleSubmit}>
      <h4>Looking good!</h4>
      <h3>Now let's add your first plant.</h3>
      <Label htmlFor="plantname">Plant Name</Label>
      <input id="plantname" name='plantname' type="text" placeholder='Plant Name' value={addPlantData.plantname} onChange={handleChanges} />
      <Label htmlFor="maintenance">Maintenance</Label>
      <select className="size-options" id="maintenance" name="size">
        <option value="low" onChange={handleChanges}>
          Low
        </option>
        <option value="medium" onChange={handleChanges}>
          Medium
        </option>
        <option value="high" onChange={handleChanges}>
          High
        </option>
      </select>
      <Label htmlFor="species">Species(optional)</Label>
      <input id="species" name="species" type="text" placeholder="Species" value={addPlantData.species}/>
      <Button type="submit">Next</Button>
      <button type="skip">Skip</button>
    </Form>
    </WrapperDiv>
    
  );
};

export default AddPlant;
