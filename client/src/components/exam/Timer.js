import React, { useEffect, useState,useContext } from "react";
import ExamResult from "./ExamResult";
import { ExamContext } from "../../state/ExamState";

const Timer = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(0);

  const exam = useContext(ExamContext);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  if(minutes + seconds === 0){
    exam.incStage();
  }

  return (
    <div className="text-xl font-semibold text-red-500 flex flex-col items-end">
      <h1>Remaining Time :</h1>
      <p className="text-3xl">
        {minutes}:{seconds}
      </p>
    </div>
  );
};

export default Timer;