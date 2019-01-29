import React, { Component } from 'react'
import { Col, Card } from 'react-materialize'
import ReactMarkdown from 'react-markdown'

export class Instructions extends Component<{ content: string }> {
  render() {
    return (
      <div className="container">
        <Col m={6} s={12}>
          <Card className="teal acent-2" textClassName="white-text" title="Osa 1">
            <ReactMarkdown source={this.props.content} />
          </Card>
        </Col>
      </div>
    )
  }
}
