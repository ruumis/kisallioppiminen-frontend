import React, { useState } from 'react'

const MaterialPicture = (props: any) => {
  return (
    <div>
      <img className="image" src={props.imagesrc} alt={props.alt} />
    </div>
  )
}

export default MaterialPicture
