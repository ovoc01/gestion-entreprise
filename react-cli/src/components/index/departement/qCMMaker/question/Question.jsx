import React, { useEffect, useState } from "react";
import "./question.css";
import Select from "../../createAnnonce/select/Select";
import { getTypeQuestion } from "../../../../../services/annonce-services";
function Question() {
  const [type_questions,setType_questions] = useState([]);
  const [selected_type_question,setSelected_type_question] = useState('');
  useEffect(()=>{
    async function fetchTypeQuestion(){
      const response = await getTypeQuestion();
      
      const data = await response;
      setType_questions(data);
    }
    fetchTypeQuestion();
  })
  const handleTypeQuestionChange = (selected_type_question) =>{
      setSelected_type_question(selected_type_question);
  }
  return (
    <>
      <h1 className="title mx-auto mt-1 has-text-link">
        Crée votre questionnaire
      </h1>
      <form action="" className="question">
        <div className="field-body mt-4 mx-auto">
          <div className="field">
            <label className="name">Designation:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Saisissez vos questions"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="name">
              Coefficient:
            </label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Coefficient"
              />
            </div>
          </div>
        </div>
        <Select
          label={"Selectionner le type de question"}
          className={"select-field"}
          options={type_questions}
          onChange={handleTypeQuestionChange}
          selectedValue={selected_type_question}
          keyR={"idType"}
          value={"intitule"}
        />
        <div className="button-container">
          <div className="field">
            <div className="control">
              <input
                type="button"
                value={"Ajouter question"}
                className="button is-link is-light add-button"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                type="button"
                value={"Validez"}
                className="button is-success is-light"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Question;
