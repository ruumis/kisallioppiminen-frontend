import React from 'react'

const Light = ({ color }: { color: string }) => {
  const name = 'scoreboard-light-' + color
  return (
    <span className={name}></span>
  )
}

export default Light