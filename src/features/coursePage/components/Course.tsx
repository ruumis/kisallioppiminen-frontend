import React, { Component } from 'react'
import { Instructions } from './Instructions';

export class Course extends Component< { markdown : string }> {
  constructor(props: any) {
    super(props)

    this.state = {
      markdown: '',
      instructions: ''
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: 'center' }}>Luvut ja laskutoimitukset</h3>
        <Instructions instructions={''} markdown={this.props.markdown} />
      </div >
    )
  }
}

export default Course
