import React from "react";
import "./GamsatTitleAndDisclaimer.scss";
import { getGamsatTitle } from "../../../../Redux/selectors";
import HelpIcon from "@mui/icons-material/Help";
import { connect } from "react-redux";

const GamsatTitleAndDisclaimer = ({ gamsatTitle }) => {
  const [disclaimerState, setDisclaimerState] = React.useState(false);

  return (
    <div>
      {gamsatTitle ? (
        <div className="gamsat">
          <h2 className="gamsat__title">
            {gamsatTitle}{" "}
            <HelpIcon onClick={() => setDisclaimerState(!disclaimerState)} />
          </h2>
          <h3
            className={
              disclaimerState
                ? "gamsat__disclaimer gamsat__disclaimer--active"
                : "gamsat__disclaimer"
            }
          >
            Please note that the prompts generated below are not the same
            prompts presented in the specified Graduate Medical School
            Admissions Test (GAMSAT). They are instead intended to reflect
            similar themes, ideas, and concerns of the prompts of that
            particular test. This is in line with ACER&apos;s copyright misconduct
            regulations which protects all GAMSAT material from being reproduced
            and distributed.
          </h3>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const gamsatTitle = getGamsatTitle(state);
  return { gamsatTitle };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamsatTitleAndDisclaimer);
