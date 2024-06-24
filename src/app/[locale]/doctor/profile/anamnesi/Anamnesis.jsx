"use client";

import getPath from "@/utils/path";
import Link from "next/link";
import { useState } from "react";

const Anamens = () => {
  const path = getPath();
  const [formState, setFormState] = useState({
    HealthChecked: "",
    seriousIllness: "",
    seriousIllnessDescription: "",
    PastSurgeryChecked: "",
    pastSurgeryDescription: "",
    CurrentTreatmentChecked: "",
    currentTreatmentDescription: "",
    HeartDiseaseChecked: "",
    BloodPressureChecked: "",
    AllergiesChecked: "",
    allergyDescription: "",
    DiabetesChecked: "",
    HepatitisChecked: "",
    LiverDiseaseChecked: "",
    liverDiseaseDescription: "",
    KidneyChecked: "",
    ThyroidChecked: "",
    StomachChecked: "",
    DigestiveChecked: "",
    digestiveDisease: "",
    LungsChecked: "",
    lungDiseaseDescription: "",
    VenerealChecked: "",
  });

  const questions = [
    { id: "HealthChecked", text: "Are you currently in good health?" },
    {
      id: "seriousIllness",
      text: "Have you had any serious illnesses in the past?",
    },
    {
      id: "seriousIllnessDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    { id: "PastSurgeryChecked", text: "Have you had surgery in the past?" },
    {
      id: "pastSurgeryDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    {
      id: "CurrentTreatmentChecked",
      text: "Are you currently undergoing medical treatment?",
    },
    {
      id: "currentTreatmentDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    {
      id: "HeartDiseaseChecked",
      text: "Have you had or currently have heart disease?",
    },
    {
      id: "BloodPressureChecked",
      text: "Do you usually take any medications?",
    },
    {
      id: "AllergiesChecked",
      text: "Have you had or currently have allergies?",
    },
    {
      id: "allergyDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    { id: "DiabetesChecked", text: "Have you had or currently have diabetes?" },
    {
      id: "HepatitisChecked",
      text: "Have you had or currently have hepatitis?",
    },
    {
      id: "LiverDiseaseChecked",
      text: "Have you had or currently have liver disease?",
    },
    {
      id: "liverDiseaseDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    {
      id: "KidneyChecked",
      text: "Have you had or currently have kidney disease?",
    },
    {
      id: "ThyroidChecked",
      text: "Have you had or currently have thyroid disease?",
    },
    {
      id: "StomachChecked",
      text: "Have you had or currently have stomach issues?",
    },
    {
      id: "DigestiveChecked",
      text: "Have you had or currently have digestive issues?",
    },
    {
      id: "digestiveDisease",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
    {
      id: "LungsChecked",
      text: "Have you had or currently have lung disease?",
    },
    {
      id: "lungDiseaseDescription",
      text: "If the answer is yes, which ones?",
      type: "input",
    },
  ];

  const handleChange = (field) => (e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  const handleCheckboxChange = (field, value) => () => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return (
    <div className="flex flex-col">
      <h1 className=" font-bold text-2xl text-black">Anamens</h1>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {questions.map((question) => (
          <div key={question.id} className="my-4">
            <p className=" text-[14px] mb-4 font-medium text-black">
              {question.text}
            </p>
            {question.type === "input" ? (
              <div className="relative">
                <input
                  value={formState[question.id]}
                  onChange={handleChange(question.id)}
                  className="mt-0 font-normal py-2.5 rounded-lg border-2 h-[48px] w-full px-3"
                />
                <div className="absolute -top-4 bg-dark-blue/5 backdrop-blur-md left-4 rounded-full px-2 py-1 ">
                  Se e si, quali ?
                </div>
              </div>
            ) : (
              <div className="flex flex-row mb-5">
                <div className="flex flex-row items-center">
                  <input
                    className="size-5 accent-black rounded-xl"
                    type="checkbox"
                    checked={formState[question.id] === "Yes"}
                    onChange={handleCheckboxChange(question.id, "Yes")}
                  />
                  <label className="accent-black rounded-lg text-black font-semibold mx-1">
                    Yes
                  </label>
                </div>
                <div className="flex flex-row mx-3 items-center">
                  <input
                    type="checkbox"
                    className="size-5 accent-black rounded-xl border-2"
                    checked={formState[question.id] === "No"}
                    onChange={handleCheckboxChange(question.id, "No")}
                  />
                  <label className=" text-black font-semibold mx-1">No</label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col my-6">
        <p className="text-light-gray">
          *Il/La sottoscritto/a autorizza il trattamento dei dati personali nel
          rispetto della vigente normativa sulla protezione dei dati personali
          ed, in particolare, il Regolamento Europeo per la protezione dei dati
          personali 2016/679, il d.lgs. 30/06/2003 n. 196 e successive modifiche
          e integrazioni, come modificato da ultimo dal d.lgs. 10/08/2018 n. 101
        </p>
        <div className="flex gap-12 items-center mt-2">
          <input
            type="checkbox"
            className="size-4 accent-black rounded-xl border-2"
          />
          <label className=" text-black font-semibold mx-1">I accept</label>
          <input
            type="checkbox"
            className="size-4 accent-black rounded-xl border-2"
          />
          <label className=" text-black font-semibold mx-1">I decline</label>
        </div>
        <p className="my-6 text-light-gray">
          ** Si informa il paziente che il rifiuto al trattamento dei propri
          dati personali a fini medici può influenzare negativamente la capacità
          del medico di effettuare un'accurata anamnesi e di fornire un
          trattamento ottimale. La mancanza di informazioni essenziali può
          portare a una diagnosi incompleta o inesatta e, di conseguenza, a un
          trattamento che potrebbe non essere il più adeguato per la sua
          condizione. È importante comprendere che la decisione di non
          permettere il trattamento dei dati personali è un diritto del
          paziente, ma comporta il rischio di non ricevere le cure più
          appropriate basate su un'analisi completa delle informazioni mediche.
        </p>
      </div>
      <></>
      <Link
        href={`/${path}/patient/profile`}
        className="flex float-end w-fit items-end my-5"
      >
        <button className="bg-dark-blue text-white py-2 px-12 rounded">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Anamens;
