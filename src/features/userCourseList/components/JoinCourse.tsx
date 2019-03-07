import React, { useState } from 'react'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

function handle(props: any) {
  console.log('click')
}

const JoinCourse = (props: any) => {
  return (
    <div>
      <div className="userCourseListPage-header">
        <label className="userCourseListPage-text">Lisää uusi kurssi:</label>
      </div>
      <div className="chapter-content">
        <input className="userCourseListPage-enter" type="text" placeholder="Kurssiavain" />
        <button className="userCourseListPage-button" onClick={handle}>
          Liity kurssille
        </button>
      </div>
    </div>
  )
}

export default JoinCourse
