import React from 'react'

const Light = ({ color }: { color: string }) => {
  const name = 'scoreboard-light-' + color
  return (
    <div className={name}></div>
  )
}

export default Light
