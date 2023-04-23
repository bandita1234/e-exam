import React, { useContext, useState } from "react";
import { ExamContext } from "../../state/ExamState";

const ExamSub = () => {
  const exam = useContext(ExamContext);
  const [select, setSelect] = useState("");

  return (
    <div className="h-screen lg:p-20">
      <div className="bg-emerald-100 h-full lg:py-10 lg:px-20 relative shadow-2xl">
        <h1>Choose Your Subject</h1>

        <select
          className="w-full text-md p-2 mb-6 border border-solid border-emerald-500"
          name="e_sub"
          id="e_sub"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="" className="text-gray-300" defaultChecked>
            -- Select a Subject--
          </option>
          <option value="phy">PHYSICS</option>
          <option value="chem">CHEMISTRY</option>
          <option value="math">MATH</option>
          <option value="bio">BIOLOGY</option>
          <option value="cs">COMPUTER SCIENCE</option>
        </select>

        <div className="flex justify-center mt-16">
          <button
            className="bg-emerald-400 py-2 px-4 rounded-md m-auto"
            onClick={() => {
              exam.incStage();
              exam.startExam(select);
            }}
          >
            Start Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamSub;