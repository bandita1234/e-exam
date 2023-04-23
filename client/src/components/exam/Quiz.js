import React, { useContext, useEffect, useState } from "react";
import { quiz } from "../../data/questions";
import { ExamContext } from "../../state/ExamState";
import Timer from "./Timer";

const Quiz = () => {
  const [ques, setQues] = useState();
  const [idx, setIdx] = useState(0);
  const [val, setVal] = useState();
  const exam = useContext(ExamContext);
  useEffect(() => {
    const tmp = quiz.filter((q) => q.topic === exam.subject);
    setQues([...tmp]);
  }, []);

  const handlePrev = () => {
    if (idx > 0) setIdx(idx - 1);
    setVal();
  };
  const handleNext = () => {
    if (idx !== ques[0].totalQuestions - 1) setIdx(idx + 1);
    setVal();
  };
  const submitExam = () => {
    exam.incStage();
    // calcRes();
  };
  const handleChange = (e) => {
    setVal(e.target.value);
    exam.updateRes(idx, e.target.value);
    console.log(exam.res);
  };
  return (
    <div className="bg-emerald-100 h-screen lg:py-10 lg:px-20 flex justify-center items-center">
      <div className="bg-emerald-200 w-full sm:w-1/2 p-8 space-y-4 rounded-md shadow-2xl">
        <div>
          <Timer />
        </div>
        <div className="">
          <p className="text-2xl font-bold">
            <span>{idx + 1}. </span>
            {ques && ques[0].questions[idx].question}
          </p>
        </div>
        <div>
          <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
            <input
              type="radio"
              name={ques && ques[0].questions[idx].question}
              id="0"
              value={ques && ques[0].questions[idx].choices[0]}
              onChange={(e) => handleChange(e)}
              checked={
                ques && exam.res[idx] === ques[0].questions[idx].choices[0]
                  ? true
                  : false
              }
            />
            <label htmlFor="0">
              {ques && ques[0].questions[idx].choices[0]}
            </label>
          </div>
          <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
            <input
              type="radio"
              name={ques && ques[0].questions[idx].question}
              id="1"
              value={ques && ques[0].questions[idx].choices[1]}
              onChange={(e) => handleChange(e)}
              checked={
                ques && exam.res[idx] === ques[0].questions[idx].choices[1]
                  ? true
                  : false
              }
            />
            <label htmlFor="1">
              {ques && ques[0].questions[idx].choices[1]}
            </label>
          </div>
          <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
            <input
              type="radio"
              name={ques && ques[0].questions[idx].question}
              id="2"
              value={ques && ques[0].questions[idx].choices[2]}
              onChange={(e) => handleChange(e)}
              checked={
                ques && exam.res[idx] === ques[0].questions[idx].choices[2]
                  ? true
                  : false
              }
            />
            <label htmlFor="2">
              {ques && ques[0].questions[idx].choices[2]}
            </label>
          </div>
          <div className="border-2 border-white hover:bg-blue-200 p-2 my-3">
            <input
              type="radio"
              name={ques && ques[0].questions[idx].question}
              id="3"
              value={ques && ques[0].questions[idx].choices[3]}
              onChange={(e) => handleChange(e)}
              checked={
                ques && exam.res[idx] === ques[0].questions[idx].choices[3]
                  ? true
                  : false
              }
            />
            <label htmlFor="3">
              {ques && ques[0].questions[idx].choices[3]}
            </label>
          </div>
        </div>
        <div>
          {ques && idx !== 0 && (
            <button
              onClick={handlePrev}
              className="bg-emerald-400 my-8 py-2 px-4 mx-2 rounded-md text-white font-semibold"
            >
              Prev
            </button>
          )}
          {ques && idx !== ques[0].totalQuestions - 1 && (
            <button
              onClick={handleNext}
              className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold"
            >
              Next
            </button>
          )}
          {ques && idx === ques[0].totalQuestions - 1 && (
            <button
              onClick={submitExam}
              className="bg-emerald-400 my-8 py-2 px-4 rounded-md text-white font-semibold"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
