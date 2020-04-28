import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import './index.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    // password: '',
  })
  const handleChanges = event => {
setSignUpData({username: event.target.value})
console.log(signUpData)
  }

  return (
    <form>
      <h4>Let's get started!</h4>
      <h3>Create your account</h3>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' onChange={handleChanges}/>
      <label htmlFor='phonenumber'>Phone Number</label>
      <input id='phonenumber'/>
      <label htmlFor='password'>Password</label>
      <input id='password'/>
      <label htmlFor='confirmpw'>Confirm Password</label>
      <input id='confirmpw'/>
      <button type='submit'>Next</button>
    </form>
  )
}

export default SignUp;
