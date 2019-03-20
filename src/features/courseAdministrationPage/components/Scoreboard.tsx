import React from 'react'
import Light from './Light'
import { Student } from '../../../types/jsontypes'

const Scoreboard = ({ course }: { course: { id: string; version: string; students: Student[]; exerciseNumbers: string[] } }) => {
  const { students } = course

  const addTableData = (exercises: Array<{ id: string; status: string }>) =>
    exercises.map(exercise => (
      <td key={exercise.id}>
        <Light color={exercise.status} />
      </td>
    ))

  // A better unique key for the tr-elements is probably needed!
  const createTableRows = () =>
    students.map((student: Student) => (
      <tr key={student.user}>
        <td>{student.user}</td>
        {addTableData(student.exercises)}
      </tr>
    ))

  return (
    <div className="scoreboard">
      <table>
        <tbody>
          <tr>
            <th> </th>
            {course.exerciseNumbers.map((e: any) => (
              <th key={`${e} ${course.id} ${course.version}`}>{e}</th>
            ))}
          </tr>
          {createTableRows()}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard
