import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import Pokedex from "../assets/images/pokedex.png";
import "./styles/homeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };

  return (
    <div className="full-screen-container">
      <div className="home-container">
        <div>
          <img className="home-title" src={Pokedex} alt="Pokedex" />
        </div>
        <h2 className="home-hi">Welcome Trainer!</h2>
        <form className="home-form" onSubmit={handleSubmit}>
          <div className="input-group success">
            <input className="input-group-input" id="name" type="text" placeholder="What's your name?"/>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover: hover:scale-70 hover:bg-blue-400 duration-300 ...">
              {" "}
              Log in
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default HomeScreen;
