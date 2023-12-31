import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./style.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis." />
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Materia</label>
          <input type="text" id="subject" />
        </div>

        <div className="input-block">
          <label htmlFor="week_day">Dia da Semana</label>
          <input type="text" id="week_day" />
        </div>

        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" id="time" />
        </div>
      </form>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
