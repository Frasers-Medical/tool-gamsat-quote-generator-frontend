import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import GenerationSelection from "./Components/GenerationSelection/GenerationSelection";
import SelectTheme from "./Components/SelectTheme/SelectTheme";
import SelectGamsatTheme from "./Components/SelectGamsatTheme/SelectGamsatTheme";
import { connect } from "react-redux";
import {
  getTaskAToggle,
  getTaskBToggle,
  getThemeLoading,
} from "../../Redux/selectors";
import {
  toggleTaskAAction,
  toggleTaskBAction,
  resetQuotesAction,
} from "../../Redux/actions";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";

const LandingPage = ({
  taskAToggle,
  taskBToggle,
  toggleTaskA,
  toggleTaskB,
  resetQuotes,
}) => {
  const [generationState, setGenerationState] = useState(0);

  useEffect(() => {
    resetQuotes();
  }, []);

  const renderTheme = () => {
    switch (generationState) {
      case 0:
        return <div />;
      case 1:
        return <SelectTheme />;
      case 2:
        return <SelectGamsatTheme />;
      default:
        return <div />;
    }
  };

  return (
    <section className="landing-section">
      <h2 className="description">
        Welcome to our Free GAMSAT Quote Generator. <br />
        To begin please select the tasks you want to write on and then click on
        the method of generation.
      </h2>
      <div className="toggle-button">
        <div className="toggle-button__container">
          <div className="toggle-button__button">
            <ToggleButton
              label="TASK A"
              toggleState={taskAToggle}
              setToggleState={toggleTaskA}
            />
          </div>
          <div className="toggle-button__button">
            <ToggleButton
              label="TASK B"
              toggleState={taskBToggle}
              setToggleState={toggleTaskB}
            />
          </div>
        </div>
      </div>

      <GenerationSelection
        onThemeButton={() => setGenerationState(1)}
        onGamsatButton={() => setGenerationState(2)}
      />

      {renderTheme()}
    </section>
  );
};

const mapStateToProps = (state) => {
  const themeLoading = getThemeLoading(state);
  const taskAToggle = getTaskAToggle(state);
  const taskBToggle = getTaskBToggle(state);
  return { themeLoading, taskAToggle, taskBToggle };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTaskA: () => dispatch(toggleTaskAAction()),
    toggleTaskB: () => dispatch(toggleTaskBAction()),
    resetQuotes: () => dispatch(resetQuotesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
