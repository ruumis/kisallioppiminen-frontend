import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { toggleContentBox } from '../../../reducers/actions/pageStateActions'
import { connect } from 'react-redux'
import { InitialState } from '../../../types/InitialState'
import classnames from 'classnames'

/* interface Props {
  header: string,
  content: string,
  openedBoxes: {[index: string]: boolean}
  toggleContentBox: typeof toggleContentBox
} */

/* class Chapter extends React.Component<Props> {
  private boxId: string

  constructor(props: Props) {
    super(props)
    this.boxId = props.header + Math.floor(Math.random() * 100000)
  }
  // const { idyll, hasError, updateProps, ...props } = content

  render() {
    const { header, openedBoxes } = this.props
    const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': openedBoxes[this.boxId] !== true })

    return (
      <div>
        <div className="chapter" onClick={this.handleBoxClick}>
          {header}
        </div>
        <div id="testi" className={contentClassname}>
          {this.props.children}
          <div className="close-chapter" onClick={this.handleBoxClick}>
            Sulje kappale
          </div>
        </div>
      </div>
    )
  }

  handleBoxClick = () => {
    this.props.toggleContentBox(this.boxId)
  }
} */

const Chapter = (props: any) => {
  const [open, setOpen] = useState(false)
  const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': open !== true })

  return (
    <div>
      <div className="chapter" onClick={() => setOpen(!open)}>
        {props.header}
      </div>
      <div className={contentClassname}>
        {props.children}
        <div className="close-chapter" onClick={() => setOpen(!open)}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}

/* const mapStateToProps = ({ pageState }: { pageState: InitialState }) => ({
  openedBoxes: pageState.pageParams.openedBoxes
})

const mapDispatchToProps = {
  toggleContentBox
}

const ConnectedChapter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chapter)

export default ConnectedChapter */
export default Chapter
