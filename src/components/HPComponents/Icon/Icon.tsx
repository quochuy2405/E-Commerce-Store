/* eslint-disable @next/next/no-img-element */
import React from 'react'
interface IconProps {
  image: string
  size: number
}

function Icon(props: IconProps) {
  const { image, size } = props
  return (
    <div style={{ width: `${size}px`, height: `${size}px`, borderRadius: 'inherit' }}>
      <img src={image} alt="" />
    </div>
  )
}

export default Icon
