import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./SelectTheme.scss";
import {
  getThemesAction,
  selectTaskATheme,
  selectTaskBTheme,
} from "../../../../Redux/actions";
import {
  getAllTaskAThemes,
  getAllTaskBThemes,
  getTaskATheme,
  getTaskBTheme,
} from "../../../../Redux/selectors";
import { useNavigate } from "react-router-dom";
import Modal from "../../../../Components/Modal/Modal";

const SelectTheme = ({
  allTaskAThemes,
  allTaskBThemes,
  taskATheme,
  taskBTheme,
  getThemes,
  selectTaskATheme,
  selectTaskBTheme,
}) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalOnClick, setModalOnClick] = useState(null);

  useEffect(() => {
    getThemes();
  }, []);

  const handleTaskAModal = () => {
    setModalState(true);
    setModalData(allTaskAThemes);
    setModalOnClick(() => (item) => {
      selectTaskATheme(item);
      setModalState(false);
    });
  };

  const handleTaskBModal = () => {
    setModalState(true);
    setModalData(allTaskBThemes);
    setModalOnClick(() => (item) => {
      selectTaskBTheme(item);
      setModalState(false);
    });
  };

  const onGenerate = () => {
    navigate("/quote");
  };

  return (
    <section className="themes-section">
      <div className="select-theme">
        <h2 className="select-theme__title">Task A Theme</h2>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="select-theme__button" onClick={handleTaskAModal}>
          {taskATheme ? taskATheme : "Select Theme"}
        </div>
        <h2 className="select-theme__title">Task B Theme</h2>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="select-theme__button" onClick={handleTaskBModal}>
          {taskBTheme ? taskBTheme : "Select Theme"}
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="select-theme__generate-button"
          onClick={() => onGenerate()}
        >
          Generate
        </div>
      </div>

      <Modal
        data={modalData}
        onItemClick={modalOnClick}
        modalState={modalState}
        setModalState={setModalState}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  const allTaskAThemes = getAllTaskAThemes(state);
  const allTaskBThemes = getAllTaskBThemes(state);
  const taskATheme = getTaskATheme(state);
  const taskBTheme = getTaskBTheme(state);
  return { allTaskAThemes, allTaskBThemes, taskATheme, taskBTheme };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: () => dispatch(getThemesAction()),
    selectTaskATheme: (theme) => dispatch(selectTaskATheme(theme)),
    selectTaskBTheme: (theme) => dispatch(selectTaskBTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTheme);
