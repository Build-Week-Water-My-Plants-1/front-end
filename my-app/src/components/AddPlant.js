import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AddPlant = () => {
  const [addPlantData, setAddPlantData] = useState({
    plantname: '',
    // species: '',
  })
  const handleChanges = event => {
    setAddPlantData({plantname: event.target.value})
    console.log(AddPlantData)
  }


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
    <form>
      <h4>Looking good!</h4>
      <h3>Now let's add your first plant.</h3>
      <label htmlFor='plantname'>Plant Name</label>
      <input id='plantname' type='text' onChange={handleChanges}/>
      <label htmlFor='maintenance'>Maintenance</label>
      <input id='maintenance'/>
      <label htmlFor='species'>Species(optional)</label>
      <input id='species'/>
      <button type='submit'>Next</button>
      <button tupe='skip'>Skip</button>
    </form>
  )
}

export default AddPlant;