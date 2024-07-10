import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef(0);
  const dialog = useRef();
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(true);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
      //defined in ResultModal  by useImperativeHandle
    }, targetTime * 1000);
    setTimeStarted(false);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStart : handleStop}>
            {timeStarted ? "Start" : "Stop"} Challange
          </button>
        </p>
        <p> {!timeStarted ? "Time is runnning ..." : "Time inactive"} </p>
      </section>
    </>
  );
}
