import React, { useState, useEffect } from "react";
import cn from "classnames";
export default function Timer({}) {
  const [isCounting, setIsCounting] = useState(false);
  const [timeElapsed, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // TODO: ADD SPACEBAR ACTIVATION AND STOP

  const startTimer = () => {
    setIsCounting(true);
    setIntervalId(
      setInterval(() => {
        setElapsedTime((elapsed) => elapsed + 1);
      }, 10)
    );
  };
  const stopTimer = () => {
    setIsCounting(false);
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <h1 className={cn(isCounting ? "block" : "hidden")}>
          Press space or click anywhere to stop!
        </h1>
        <div className="text-9xl">
          <span>
            {timeElapsed / 100 / 60 >= 1
              ? Math.floor(timeElapsed / 100 / 60)
              : "00"}
          </span>
          <span>.</span>
          <span>
            {timeElapsed / 100 >= 1
              ? Math.floor(timeElapsed / 100) >= 10
                ? Math.floor(timeElapsed / 100)
                : "0" + Math.floor(timeElapsed / 100)
              : "00"}
          </span>
          <span>:</span>
          <span>
            {timeElapsed === 0 ? "00" : timeElapsed.toString().slice(-2)}
          </span>
        </div>
        <div>{isCounting}</div>
        <div>
          <button
            className="py-4 bg-gray-200 w-32 rounded-lg"
            onClick={() => {
              startTimer();
            }}
            disabled={isCounting}
          >
            Start time
          </button>
        </div>
        <div></div>
      </div>
      <div
        className={cn(
          "w-full h-full bg-black bg-opacity-50 absolute top-0 left-0 z-50 transition-all",
          isCounting ? "visible" : "invisible"
        )}
        onClick={() => {
          stopTimer();
        }}
      />
    </>
  );
}
