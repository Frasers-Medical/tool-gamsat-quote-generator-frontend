import React, { useEffect } from "react";
import "./Timer.scss";
// TODO: fix timer sound
// import Sound from "react-sound";
import Cowbell from "../../Data/cowbell.mp3";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = React.useState(6300);
  const [timerActive, setTimerActive] = React.useState(false);
  const [playSound, setPlaySound] = React.useState(false);
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  useEffect(() => {
    if (timerActive) {
      const timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          setTimerActive(false);
          console.log("got here and ending");
          setPlaySound(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timerActive, timeRemaining]);

  const getHours = () => {
    var hours = new Date(timeRemaining * 1000).toISOString().substr(11, 2);
    return hours;
  };

  const updateHours = (e) => {
    if (e.target.value !== "") {
      const hours = parseInt(getHours());
      const updatedHours = parseInt(e.target.value);
      if (updatedHours < 24) {
        const difference = (updatedHours - hours) * 3600;
        setTimeRemaining(timeRemaining + difference);
      }
    }
  };

  const getMinutes = () => {
    var minutes = new Date(timeRemaining * 1000).toISOString().substr(14, 2);
    return minutes;
  };

  const updateMinutes = (e) => {
    if (e.target.value !== "") {
      const minutes = parseInt(getMinutes());
      const updatedMinutes = parseInt(e.target.value);
      const difference = (updatedMinutes - minutes) * 60;
      setTimeRemaining(timeRemaining + difference);
    }
  };

  const getSeconds = () => {
    var seconds = new Date(timeRemaining * 1000).toISOString().substr(17, 2);
    return seconds;
  };

  const updateSeconds = (e) => {
    if (e.target.value !== "") {
      const seconds = parseInt(getSeconds());
      const updatedSeconds = parseInt(e.target.value);
      const difference = updatedSeconds - seconds;
      setTimeRemaining(timeRemaining + difference);
    }
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  const restrictInput = (e) => {
    const keyPressed = e.keyCode || e.which;

    if (keyPressed < 96 || keyPressed > 105) {
      e.preventDefault();
    }
  };

  const renderSound = () => {
    if (playSound && soundEnabled) {
      return (
        <div>
          {/* TODO: fix timer sound */}
          {/* <Sound
            url={Cowbell}
            playStatus={Sound.status.PLAYING}
            playFromPosition={0}
            onFinishedPlaying={() => setPlaySound(false)}
          />*/}
        </div> 
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      {renderSound()}

      <div className="timer">
        <div className="timer__display">
          <div className="timer__container">
            <input
              className="timer__input"
              type="text"
              maxLength="2"
              onKeyDown={(e) => restrictInput(e)}
              onFocus={(e) => resetInput(e)}
              placeholder={getHours()}
              onBlur={(e) => updateHours(e)}
            />
            <div className="timer__text">{getHours()}</div>
          </div>
          <div className="timer__container">:</div>
          <div className="timer__container">
            <input
              className="timer__input"
              type="text"
              onFocus={(e) => resetInput(e)}
              placeholder={getMinutes()}
              onBlur={(e) => updateMinutes(e)}
            />
            <div className="timer__text">{getMinutes()}</div>
          </div>
          <div className="timer__container">:</div>
          <div className="timer__container">
            <input
              className="timer__input"
              type="text"
              onFocus={(e) => resetInput(e)}
              placeholder={getSeconds()}
              onBlur={(e) => updateSeconds(e)}
            />
            <div className="timer__text">{getSeconds()}</div>
          </div>
        </div>
        <div className="timer__control">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="timer__button" onClick={() => setTimeRemaining(6300)}>
            reset
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={
              timerActive
                ? "timer__button timer__button--clicked"
                : "timer__button"
            }
            onClick={() => setTimerActive(!timerActive)}
          >
            {timerActive ? "pause" : "start"}
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={
              soundEnabled
                ? "timer__button"
                : "timer__button timer__button--clicked"
            }
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? "mute" : "unmute"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
