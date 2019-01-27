import React, { Component } from 'react'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'

export class Header extends Component {
  render() {
    return (
      <div>
        {'test document @ components/Header.tsx'}
        <IdyllDocument
          markup={`# Hello world
				 plaaplaa

				 ## H2
				 ### H3` }
          components={components}
          datasets={{}} />
      </div>
    )

  }
}

export default Header
