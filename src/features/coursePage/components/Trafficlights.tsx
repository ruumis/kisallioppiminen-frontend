import React, { Fragment } from 'react'
import Emoji from 'react-emoji-render'

export default function Trafficlights() {
  return (
    <Fragment>
      <div className="mitenTehtavaMeni">Miten tehtävä meni?</div>
      <div className="trafficlight-container">
        <Emoji className="clickable trafficlight trafficlight-green" text=":)" />
        <Emoji className="clickable trafficlight trafficlight-yellow" text=":|" />
        <Emoji className="clickable trafficlight trafficlight-red" text=":(" />
      </div>
    </Fragment>
  )
}
