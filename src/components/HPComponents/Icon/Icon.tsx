/* eslint-disable @next/next/no-img-element */
import type { Icon as Types } from '../Interface'

function Icon(props: Types): JSX.Element {
  const { image, size } = props

  return (
    <div style={{ width: `${size}px`, height: `${size}px`, borderRadius: 'inherit' }}>
      <img src={image} alt="" />
    </div>
  )
}

export default Icon
