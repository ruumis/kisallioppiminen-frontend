import React, { Component } from 'react'
import { Col, Card } from 'react-materialize'
import ReactMarkdown from 'react-markdown'

export class Instructions extends Component<{instructions: string, markdown: string } > {
  render() {

    //let key = 1;
    // const input = '# This is a header\n\nAnd this is a paragraph'

            // <ReactMarkdown source={input} />
            // {this.props.instructions}
            // {"$$1 \\ \\% = \\frac{1}{100} = 0{,}01.$$"}
    return (
      <div className="container">
        <Col m={6} s={12}>
          <Card className='teal acent-2' textClassName='white-text' title='Osa 1'>
            <ReactMarkdown source={this.props.markdown} />
          </Card>
        </Col>
      </div >
    )
  }
}
