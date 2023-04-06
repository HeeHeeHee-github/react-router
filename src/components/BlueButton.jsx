import React from 'react'
import Button from './Button'

export default function BlueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="rgb(229, 242, 254)"
      subColor="rgb(167, 206, 236)"
      hoverColor="rgb(128, 188, 222)"
    />
  )
}
