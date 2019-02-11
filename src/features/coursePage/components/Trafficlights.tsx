import React from 'react'
import Emoji from 'react-emoji-render'

export default function Trafficlights() {
  return (
    <div className="trafficlight-container">
      <Emoji className="clickable trafficlight trafficlight-green" text=":)" />
      <Emoji className="clickable trafficlight trafficlight-yellow" text=":|" />
      <Emoji className="clickable trafficlight trafficlight-red" text=":(" />
    </div>
  )
}
