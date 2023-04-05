import React from 'react'
import Button from './Button'

export default function YellowButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="rgb(253, 254, 229)"
      subColor="rgb(236, 231, 167)"
      hoverColor="rgb(222, 217, 128)"
    />
  )
}
