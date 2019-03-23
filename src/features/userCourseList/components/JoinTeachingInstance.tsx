import React, { useState } from 'react'
import courseService from './../../../services/courseService'
import { connect } from 'react-redux'
import { User } from '../../../types/InitialState';

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

function handle(event: any, userId: number) {
  event.preventDefault()
  courseService.joinTeachingInstance(event.target.courseKey.value, 420, false)
}

const JoinCourse = (props: any) => {
  return (
    <div>
      <form onSubmit={event => handle(event, props.userId)}>
        <div className="userCourseListPage-header">
          <label className="userCourseListPage-text">Lisää uusi kurssi:</label>
        </div>
        <div className="chapter-content">
          <input name="courseKey" className="userCourseListPage-enter" type="text" placeholder="Kurssiavain" />
          <button className="userCourseListPage-button" type="submit">
            Liity kurssille
          </button>
        </div>
      </form>
    </div>
  )
}

export default JoinCourse
