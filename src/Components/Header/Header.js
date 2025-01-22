import React, { useEffect } from "react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigationBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <nav className="navigation">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={
            location.pathname === "/"
              ? "navigation__back-button navigation__back-button--hidden"
              : "navigation__back-button"
          }
          onClick={navigationBack}
        >
          <ArrowBackIcon />
        </div>
      </nav>

      <h1 className="header__title">
        GAMSAT Section II <br /> Quote Generator
      </h1>
    </header>
  );
}

export default Header;
