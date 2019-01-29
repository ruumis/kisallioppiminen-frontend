import React, { Component } from 'react'
import { Instructions } from './Instructions'
import { InitialState } from '../../../types/InitialState'
import { CourseHeader } from './CourseHeader'

export class Course extends Component<{ initialState: InitialState }> {
  constructor(props: any) {
    super(props)

    this.state = {
      markdown: '',
      instructions: ''
    }
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: 'center' }}>Luvut ja laskutoimitukset</h3>
        <CourseHeader headerContent={this.props.initialState.courseHeaderMarkdown} />
        {this.props.initialState.chapters.map(chapter => (
          <Instructions content={chapter.content} />
        ))}
      </div>
    )
  }
}

export default Course
