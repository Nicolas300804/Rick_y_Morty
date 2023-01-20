import React from "react";
import validation from "./validation";
import  {useState} from "react"
import './Styles/Form.modules.css'

export default function Form({login}) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleinputChange(event) {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    login(userData)
  }

  return (
    <div className="form-principal">
      <form onSubmit={handleSubmit}>
        <div>
          <label> Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleinputChange}
          />
          {errors.username && <p>{errors.username}</p>}

          <label>Password</label>
          <input
            type="text"
            name="username"
            placeholder="Enter password"
            onChange={handleinputChange}
            />
            {errors.username && <p>{errors.username}</p>}

          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
