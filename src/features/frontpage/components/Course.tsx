import React, { Component } from 'react'

export default class Course extends Component<any, any> {
  render() {

    console.log('RENDERING')

    return (
      <div className="course">
        <h2 className="course-title">Luvut ja lukujonot</h2>
        <ol className="course-parts">
          <li>
            <span className="course-content">Luvut ja laskutoimitukset</span>
          </li>
          <li>
            <span className="course-content">Potenssit ja logaritmit</span>
          </li>
          <li>
            <span className="course-content">Lukujonot ja summat</span>
          </li>
          <li>
            <span className="course-content">Funktio</span>
          </li>
          <li>
            <span className="course-content">Potenssilaskenta</span>
          </li>
        </ol>
      </div>
    )
  }
}
