import React, { Component } from 'react'
import { Col, Card } from 'react-materialize'
import ReactMarkdown from 'react-markdown'
import {Tex} from 'react-tex'

export class CourseHeader extends Component<{ headerContent: string }> {
  render() {
    return (
      <div className="container">
        <Col m={6} s={12}>
          <Card className="teal acent-2" textClassName="white-text" title="Osa 1">
            <ReactMarkdown source={this.props.headerContent} renderers={{
              code: (props: any) => props.language === 'latex' ?  (<Tex texContent={props.value} />) : <code>{props.value}</code>
            }} />
          </Card>
        </Col>
      </div>
    )
  }
}
