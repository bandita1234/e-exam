import React,{useContext} from "react";
import ExamGuide from "./ExamGuide";
import ExamResult from "./ExamResult";
import ExamSub from "./ExamSub";
import Quiz from "./Quiz";
import { ExamContext } from "../../state/ExamState";

const Exam = () => {
  const exam = useContext(ExamContext)
  return (
    <div>
    {exam.stage===0 && <ExamGuide/>}
    {exam.stage===1 && <ExamSub/>}
    {exam.stage===2 && <Quiz/>}
    {exam.stage===3 && <ExamResult />}
    </div>
  );
};

export default Exam;