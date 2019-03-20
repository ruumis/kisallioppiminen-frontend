import React from 'react'
import Light from './Light'
import { Student } from '../../../types/jsontypes'

const Scoreboard = ({ course }: { course: { id: string; version: string; students: Student[]; exerciseNumbers: string[] } }) => {
  const { students } = course
  const numberToOrder: { [i: string]: number } = {}
  let index = 0
  course.exerciseNumbers.forEach(num => {
    numberToOrder[num] = index
    index++
  })

  const makeGrays = (exercise: any) => {
    const grays: any = []
    while (numberToOrder[exercise.id] !== index && index < course.exerciseNumbers.length) {
      grays.push(
        <td key={Math.random() * 100000}>
          <Light color="gray" />
        </td>
      )

      index++
    }

    index++
    return grays
  }

  const makeGraysEnd = () => {
    const grays: any = []
    while (index < course.exerciseNumbers.length) {
      grays.push(
        <td key={Math.random() * 10000000}>
          <Light color="gray" />
        </td>
      )

      index++
    }

    index++
    return grays
  }

  const zeroIndex = () => {
    index = 0
  }

  const addTableData = (exercises: Array<{ id: string; status: string }>) =>
    exercises.map(exercise => (
      <React.Fragment key={`${exercise.id} ${Math.random() * 10000} fragment`}>
        {makeGrays(exercise)}
        <td key={`${exercise.id} ${Math.random() * 10000}`}>
          <Light color={exercise.status} />
        </td>
      </React.Fragment>
    ))

  const sortExercises = (student: any) => {
    student.exercises = student.exercises.sort((e1: any, e2: any) => numberToOrder[e1.id] - numberToOrder[e2.id])
  }
  // A better unique key for the tr-elements is probably needed!
  const createTableRows = () => {
    return students.map((student: Student) => (
      <tr key={`${student.user} ${Math.random() * 10000}`}>
        <td>{student.user}</td>
        {zeroIndex()}
        {sortExercises(student)}
        {addTableData(student.exercises)}
        {makeGraysEnd()}
      </tr>
    ))
  }

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
