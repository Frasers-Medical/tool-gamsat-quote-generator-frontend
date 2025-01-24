import React, { useRef } from "react";
import { connect } from "react-redux";
import "./Utilities.scss";
import {
  getTaskATheme,
  getTaskBTheme,
  getTaskAQuotes,
  getTaskBQuotes,
} from "../../../../Redux/selectors";
import { useReactToPrint } from "react-to-print";
import HiddenButton from "../../../../Components/HiddenButton/HiddenButton";

const Utilities = ({ taskATheme, taskBTheme, taskAQuotes, taskBQuotes }) => {
  const [copyAnimation, setCopyAnimation] = React.useState(false);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "GAMSAT QUOTE",
    contentRef: componentRef,
  });

  const onCopyToClipboard = () => {
    setCopyAnimation(true);

    const copiedText = `
Task A - ${taskATheme}
${taskAQuotes.map((quote, index) => `${index + 1}. ${quote}\n`)}

Task B - ${taskBTheme}
${taskBQuotes.map((quote, index) => `${index + 1}. ${quote}\n`)}
        `;
    navigator.clipboard.writeText(copiedText);
  };

  return (
    <div className="utilities">
      <div className="print-component">
        <div className="print" ref={componentRef}>
          <div className="quotes">
            <h2 className="quotes__title">
              <HiddenButton
                titleLabel="Task A"
                visibleLabel={taskATheme}
                hiddenLabel=""
                initialState={1}
              />
            </h2>

            <ul className="quotes__list">
              {taskAQuotes.map((quote, index) => (
                <li key={index} className="quotes__item">
                  <p>
                    {index + 1}. {quote}
                  </p>
                </li>
              ))}
            </ul>

            <h2 className="quotes__title">
              <HiddenButton
                titleLabel="Task B"
                visibleLabel={taskBTheme}
                hiddenLabel=""
                initialState={1}
              />
            </h2>
            <ul className="quotes__list">
              {taskBQuotes.map((quote, index) => (
                <li key={index} className="quotes__item">
                  <p>
                    {index + 1}. {quote}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="utilities__container">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="utilities__button" onClick={() => onCopyToClipboard()}>
          <span
            className={
              copyAnimation
                ? "utilities__button__clipboard--active"
                : "utilities__button__clipboard"
            }
            onAnimationEnd={() => setCopyAnimation(false)}
          >
            {" "}
            Copy To Clipboard
          </span>
          <span
            className={
              copyAnimation
                ? "utilities__button__copied utilities__button__copied--active"
                : "utilities__button__copied"
            }
          >
            {" "}
            Copied!{" "}
          </span>
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="utilities__button" onClick={() => handlePrint()}>
          Print
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const taskATheme = getTaskATheme(state);
  const taskBTheme = getTaskBTheme(state);
  const taskAQuotes = getTaskAQuotes(state);
  const taskBQuotes = getTaskBQuotes(state);
  return { taskATheme, taskBTheme, taskAQuotes, taskBQuotes };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Utilities);
