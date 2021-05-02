import React, { useState, useEffect } from "react";
import cn from "classnames";
import Modal from "./modal";
import FormattedTime from "./formattedTime";
export default function Timer({}) {
  const [isCounting, setIsCounting] = useState(false);
  const [lastTime, setLastTime] = useState(null)
  const [isSaveModalOpen,setSaveModalOpen] = useState(false)
  const [timeElapsed, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // TODO: ADD SPACEBAR ACTIVATION AND STOP

  const startTimer = () => {
    setIsCounting(true);
    setElapsedTime(0);
    setIntervalId(
      setInterval(() => {
        setElapsedTime((elapsed) => elapsed + 1);
      }, 10)
    );
  };
  const stopTimer = () => {
    setIsCounting(false);
    setLastTime(timeElapsed)
    setSaveModalOpen(true);
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <h1 className={cn(isCounting ? "block" : "hidden")}>
          Press space or click anywhere to stop!
        </h1>
        <div className="text-9xl">
          <FormattedTime time={timeElapsed} />
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
      <Modal isModalOpen={isSaveModalOpen} lastTime={lastTime}/>
    </>
  );
}
