import React, { useState } from "react";
import { connect } from "react-redux";
import "./SelectGamsatTheme.scss";
import { useEffect } from "react";
import {
  getGamsatThemesAction,
  selectGamsatAction,
  selectTaskATheme,
  selectTaskBTheme,
} from "../../../../Redux/actions";
import { getAllGamsatThemes } from "../../../../Redux/selectors";
import { useNavigate } from "react-router-dom";
import Modal from "../../../../Components/Modal/Modal";

const SelectGamsatTheme = ({
  allGamsatThemes,
  getGamsatThemes,
  selectTaskATheme,
  selectTaskBTheme,
  selectGamsat,
}) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    getGamsatThemes();
  }, []);

  const onGamsatClick = (item) => {
    const selectedGamsatObj = allGamsatThemes.find(
      (gamsatObj) =>
        gamsatObj.year.toString() === item.substring(0, 4) &&
        gamsatObj.month.toString() === item.substring(7, item.length),
    );
    selectTaskATheme(selectedGamsatObj.task_a_theme);
    selectTaskBTheme(selectedGamsatObj.task_b_theme);
    selectGamsat(selectedGamsatObj.year, selectedGamsatObj.month);
    setModalState(false);
    navigate("/quote");
  };

  return (
    <section className="gamsat-section">
      <Modal
        data={allGamsatThemes.map((obj) => `${obj.year} - ${obj.month}`)}
        onItemClick={onGamsatClick}
        modalState={modalState}
        setModalState={setModalState}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  const allGamsatThemes = getAllGamsatThemes(state);
  return { allGamsatThemes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGamsatThemes: () => dispatch(getGamsatThemesAction()),
    selectTaskATheme: (theme) => dispatch(selectTaskATheme(theme)),
    selectTaskBTheme: (theme) => dispatch(selectTaskBTheme(theme)),
    selectGamsat: (year, month) => dispatch(selectGamsatAction(year, month)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectGamsatTheme);
