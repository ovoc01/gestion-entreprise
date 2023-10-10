import React from "react";
import "./qCMMaker.css";
import Question from "./question/Question";
import QuestionOverview from "./questionOverview/QuestionOverview"
function QCMMaker() {
  return (
    <div className="qCMMaker">
      
      <form className="qcm_container" action="">
        <Question/>
      </form>
        <QuestionOverview/>
    </div>
  );
}

export default QCMMaker;
