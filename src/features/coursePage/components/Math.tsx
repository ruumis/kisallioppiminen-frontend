import React from 'react'
import { Equation } from 'idyll-components'

const Math = (props: any) => {
  return (
    <div>
        <Equation>
            {props.children}
        </Equation>
    </div>
  )
}

export default Math
