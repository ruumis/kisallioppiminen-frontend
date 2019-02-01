import React from 'react'

export class Test extends React.PureComponent {
  toggleVisibility = (id: string) => {
    const pageContent = document.getElementById(id)
    // console.log('funktiota kutsuttiin')
    if (pageContent) {
      console.log(pageContent.style.display)
      if (pageContent.style.display === 'none' || pageContent.style.display === '') {
        pageContent.style.display = 'block'
      } else {
        pageContent.style.display = 'none'
      }
    }
  }
  // const { idyll, hasError, updateProps, ...props } = content

  render() {
    return (
      <div>
        <div className="chapter" onClick={() => this.toggleVisibility('test')}>
          {'Test header'}
        </div>
        <div id={'test'} className="chapter_content">
          {this.props.children}
          <div className="close_chapter" onClick={() => this.toggleVisibility('test')}>
            Sulje kappale
          </div>
        </div>
      </div>
    )
  }
}
export default Test
