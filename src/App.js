import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import QuotePage from "./Pages/QuotePage/QuotePage";

function App() {
  return (
    <Router>
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={450} classNames="fade">
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/quote" element={<QuotePage />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </Router>
  );
}

export default App;
