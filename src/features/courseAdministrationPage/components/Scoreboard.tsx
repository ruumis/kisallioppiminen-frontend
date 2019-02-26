import React from 'react'
import Light from './Light'
import { Student } from '../../../types/jsontypes'

const Scoreboard = ({ students }: { students: Student[] }) => {

  const addTableData = (exercises: Array<{ id: string; status: string }>) =>
    exercises.map(exercise => <td><Light color={exercise.status} /></td>)

  const createTableRows = () =>
    students.map(student =>
      <tr>
        <td>{student.user}</td>
        {addTableData(student.exercises)}
      </tr>)

  return (
    <div className="scoreboard">
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>1.1</th>
            <th>1.2</th>
            <th>1.3</th>
            <th>1.4</th>
            <th>1.5</th>
            <th>1.6</th>
            <th>1.7</th>
            <th>1.8</th>
            <th>1.9</th>
            <th>2.0</th>
            <th>2.1</th>
            <th>2.2</th>
            <th>2.3</th>
            <th>2.4</th>
            <th>2.5</th>
            <th>2.6</th>
            <th>2.7</th>
            <th>2.8</th>
            <th>2.9</th>
            <th>3.0</th>
            <th>3.1</th>
            <th>3.2</th>
            <th>3.3</th>
            <th>3.4</th>
            <th>3.5</th>
            <th>3.6</th>
            <th>3.7</th>
            <th>3.8</th>
            <th>3.9</th>
            <th>4.0</th>
            <th>4.1</th>
            <th>4.2</th>
          </tr>
          {createTableRows()}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard
