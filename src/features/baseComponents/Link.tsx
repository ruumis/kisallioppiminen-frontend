import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { changePage } from '../../reducers/actions/pageStateActions'

class Link extends React.Component<{
  href: string
  changePage: typeof changePage
  className?: string
}> {
  constructor(props: { href: string; changePage: typeof changePage; className: string }) {
    super(props)
  }

  render() {
    const { className } = this.props
    if (className) {
      return (
        <a className={className} href={this.props.href} onClick={this.handleOnClick}>
          {this.props.children}
        </a>
      )
    }

    return (
      <a className="white-link" href={this.props.href} onClick={this.handleOnClick}>
        {this.props.children}
      </a>
    )
  }

  handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    this.props.changePage(this.props.href)
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  changePage
}

const ConnectedLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ConnectedLink
