import React, { useState} from "react";
import { Redirect, useHistory } from "react-router-dom";
import { setStorage } from "./setStorage";
import UseFetch from "./useFetch";

const Login = () => {

    const history = useHistory();
    

    const [config, setConfig] = useState({});

    const [test, setTest] = useState("");

    const {data, isLoading, error } = UseFetch("api/Auth/login", config);

  const onClickLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    setConfig(prev => {
        return {
            ...prev,
            method: "POST",
            body: JSON.stringify({
                email: username,
                password: password
            })
        }
    })

  };


  if(data) {
      setStorage('user', data);

      history.push("/todolist");
  }

  return (
    <form onSubmit={onClickLogin} className="login__container">
      <h1>LOgin</h1>
      <h1 role="masukdata">{data && "masuk data"}</h1>
      <input
        type="text"
        className="form__input"
        placeholder="email"
        id="username"
      />
      <input
        type="password"
        className="form__input"
        placeholder="password"
        id="password"
      />
      <input type="submit" value="submit" className="form__input" />
    </form>
  );
};

export default Login;
