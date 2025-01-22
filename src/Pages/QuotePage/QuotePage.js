import React from "react";
import { connect } from "react-redux";
import "./QuotePage.scss";
import {
  getQuotesAction,
  selectTaskABreakdownThemeAction,
  selectTaskBBreakdownThemeAction,
} from "../../Redux/actions";
import { useEffect } from "react";
import {
  getTaskATheme,
  getTaskBTheme,
  getTaskAQuotes,
  getTaskBQuotes,
  getTaskABreakdownThemes,
  getTaskBBreakdownThemes,
  getTaskABreakdown,
  getTaskBBreakdown,
  getTaskAToggle,
  getTaskBToggle,
  getGamsatTitle,
} from "../../Redux/selectors";
import HiddenButton from "../../Components/HiddenButton/HiddenButton";
import Timer from "../../Components/Timer/Timer";
import ChipList from "../../Components/ChipList/ChipList";
import Utilities from "./Components/Utilities/Utilities";
import GamsatTitleAndDisclaimer from "./Components/GamsatTitleAndDisclaimer/GamsatTitleAndDisclaimer";

const QuotePage = ({
  taskATheme,
  taskBTheme,
  taskAQuotes,
  taskBQuotes,
  taskAToggle,
  taskBToggle,
  taskABreakdownThemes,
  taskBBreakdownThemes,
  taskABreakdown,
  taskBBreakdown,
  getQuotes,
  selectTaskABreakdownTheme,
  selectTaskBBreakdownTheme,
}) => {
  const [taskABreakdownState, setTaskABreakdownState] = React.useState(0);
  const [taskBBreakdownState, setTaskBBreakdownState] = React.useState(0);

  useEffect(() => {
    // task was selected: generate by theme
    if (taskATheme || taskBTheme) {
      getQuotes(taskATheme, taskBTheme);

      // no task was selected: generate randomly
    } else {
      getQuotes();
    }
  }, []);

  const handleThemeAReveal = (hiddenButtonState) => {
    setTaskABreakdownState(hiddenButtonState ^ 1);
  };

  const handleThemeBReveal = (hiddenButtonState) => {
    setTaskBBreakdownState(hiddenButtonState ^ 1);
  };

  const renderQuotes = (quotes, breakdowns) => {
    return (
      <ul className="quotes__list">
        {quotes.map((quote, index) => {
          if (breakdowns[index][0] === null && breakdowns[index][1] === null) {
            return (
              <li className="quotes__item">
                <p>
                  {index + 1}. {quote}
                </p>
              </li>
            );
          } else {
            return (
              <li className="quotes__item">
                <p>
                  {index + 1}. {quote.substring(0, breakdowns[index][0])}
                  <span className="quotes__item--highlight">
                    {quote.substring(
                      breakdowns[index][0],
                      breakdowns[index][1] + 1,
                    )}
                  </span>
                  {quote.substring(breakdowns[index][1] + 1, quote.length)}
                </p>
              </li>
            );
          }
        })}
      </ul>
    );
  };

  const renderTaskAQuotes = () => {
    if (taskAToggle) {
      return (
        <div>
          <h2 className="quotes__title">
            <HiddenButton
              titleLabel="Task A"
              visibleLabel="Reveal Theme"
              hiddenLabel={taskATheme}
              initialState={1}
              onButtonClick={handleThemeAReveal}
            />
          </h2>
          <div
            className={
              taskABreakdownState
                ? "quotes__breakdown quotes__breakdown--active"
                : "quotes__breakdown"
            }
          >
            <ChipList
              data={taskABreakdownThemes}
              onItemClick={(index) =>
                selectTaskABreakdownTheme(taskABreakdownThemes[index])
              }
            />
          </div>
          <ul className="quotes__list">
            {renderQuotes(taskAQuotes, taskABreakdown)}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const renderTaskBQuotes = () => {
    if (taskBToggle) {
      return (
        <div>
          <h2 className="quotes__title">
            <HiddenButton
              titleLabel="Task B"
              visibleLabel="Reveal Theme"
              hiddenLabel={taskBTheme}
              initialState={1}
              onButtonClick={handleThemeBReveal}
            />
          </h2>
          <div
            className={
              taskBBreakdownState
                ? "quotes__breakdown quotes__breakdown--active"
                : "quotes__breakdown"
            }
          >
            <ChipList
              data={taskBBreakdownThemes}
              onItemClick={(index) =>
                selectTaskBBreakdownTheme(taskBBreakdownThemes[index])
              }
            />
          </div>
          <ul className="quotes__list">
            {renderQuotes(taskBQuotes, taskBBreakdown)}
          </ul>
        </div>
      );
    }
  };

  return (
    <section className="quotes-section">
      <div>
        <Timer />
        <Utilities />
        <GamsatTitleAndDisclaimer />

        <div className="quotes">
          {renderTaskAQuotes()}
          {renderTaskBQuotes()}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const taskATheme = getTaskATheme(state);
  const taskBTheme = getTaskBTheme(state);
  const taskAQuotes = getTaskAQuotes(state);
  const taskBQuotes = getTaskBQuotes(state);
  const taskAToggle = getTaskAToggle(state);
  const taskBToggle = getTaskBToggle(state);
  const taskABreakdownThemes = getTaskABreakdownThemes(state);
  const taskBBreakdownThemes = getTaskBBreakdownThemes(state);
  const taskABreakdown = getTaskABreakdown(state);
  const taskBBreakdown = getTaskBBreakdown(state);
  const gamsatTitle = getGamsatTitle(state);
  return {
    taskATheme,
    taskBTheme,
    taskAQuotes,
    taskBQuotes,
    taskAToggle,
    taskBToggle,
    taskABreakdownThemes,
    taskBBreakdownThemes,
    taskABreakdown,
    taskBBreakdown,
    gamsatTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuotes: (taskATheme, taskBTheme) =>
      dispatch(getQuotesAction(taskATheme, taskBTheme)),
    selectTaskABreakdownTheme: (breakdownTheme) =>
      dispatch(selectTaskABreakdownThemeAction(breakdownTheme)),
    selectTaskBBreakdownTheme: (breakdownTheme) =>
      dispatch(selectTaskBBreakdownThemeAction(breakdownTheme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotePage);
