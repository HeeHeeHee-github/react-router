import React from 'react'
import Button from './Button'

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="rgb(254, 229, 233)"
      subColor="rgb(236, 167, 179)"
      hoverColor="rgb(222, 128, 143)"
    />
  )
}
