import React, { useContext, useEffect, useState } from 'react'
import { quiz } from "../../data/questions";
import { ExamContext } from "../../state/ExamState";
const ExamResult = () => {
  const exam = useContext(ExamContext);
  const [ques, setQues] = useState();
  const calcRes = (tmp) => {
    let sc = 0;
    for (let idx = 0; idx < tmp[0].totalQuestions; idx++) {
      if (tmp[0].questions[idx].choices[tmp[0].questions[idx].correctAnswer] == exam.res[idx]) {
        sc += 1;
      }
    }
    exam.setScore(sc);
    console.log(sc);
  }
  useEffect(() => {
    const tmp = quiz.filter((q) => q.topic === exam.subject);
    setQues([...tmp]);
    calcRes(tmp);
  }, []);
  return (
    <div className="bg-emerald-100 h-screen lg:py-10 lg:px-20 flex justify-center items-center">
      <div className="bg-emerald-200 w-full sm:w-1/2 p-8 space-y-4 rounded-md">
        <p>
          {exam && exam.score && <h1>Your Total Score is : {exam.score}</h1>}
        </p>
        <button className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold">
          <a href="/" >Home</a>
        </button>
      </div>
    </div>
  )
}

export default ExamResult