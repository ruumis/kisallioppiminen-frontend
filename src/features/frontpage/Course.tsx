import React, { Component } from 'react'
import './Course.scss'

export default class Course extends Component<any, any> {
  render() {

    console.log('RENDERING')

    return (
      <div className="course">
        <h2 className="course-title">Luvut ja lukujonot</h2>
        <ol className="course-parts">
          <li>Luvut ja laskutoimitukset</li>
          <li>Potenssi ja logaritmi</li>
          <li>Lukujonot ja summat</li>
          <li>Funktio</li>
          <li>Potenssilaskenta</li>
        </ol>
      </div>
    )
  }
}
