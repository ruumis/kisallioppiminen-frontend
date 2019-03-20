import React, { useState } from 'react'
import { connect } from 'react-redux'
import { InitialState, Course } from '../../../types/InitialState'

export default function NewInstanceForm() {

  const form = ({ pageState }: { pageState: InitialState }) => {

    const [selectedCourse, setSelectedCourse] = useState(pageState.courses[0])

    const handleCourseSelectorChange = (selection: string) => {
      const selected = pageState.courses.find(course => course.courseName === selection)
      if (selected !== undefined) {
        setSelectedCourse(selected)
      }
    }

    return (
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Kurssin nimi</td>
                <td><input type="text" name="instanceName"></input></td>
              </tr>
              <tr>
                <td>Kurssimateriaali</td>
                <td><select onChange={e => handleCourseSelectorChange(e.target.value)}>{addCourses(pageState.courses)}</select></td>
              </tr>
              <tr>
                <td>Materiaalin versio</td>
                <td><select>{addVersions(selectedCourse)}</select></td>
              </tr>
              <tr>
                <td>Kurssiavain</td>
                <td><input type="text" name="courseKey"></input></td>
              </tr>
              <tr>
                <td>Kurssi alkaa</td>
                <td><input type="date" name="courseStart"></input></td>
              </tr>
              <tr>
                <td>Kurssi päättyy</td>
                <td><input type="date" name="courseEnd"></input></td>
              </tr>
              <tr>
                <td><input type="submit" value="Luo kurssi"></input></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }

  const addCourses = (courses: Course[]) =>
    courses.map(course => <option key={course.id}>{course.courseName}</option>)

  const addVersions = (course: Course) =>
    course.courseContent.map(vrsn =>
      <option key={vrsn.version}>{vrsn.version}</option>)

  const mapStateToProps = (state: { pageState: InitialState }) => ({
    pageState: state.pageState
  })

  const ConnectedNewInstanceForm = connect(mapStateToProps)(form)
  return <ConnectedNewInstanceForm />
}
