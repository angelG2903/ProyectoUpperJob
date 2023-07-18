import React from 'react'

export const Tag = ({TextName, style}) => {
  return (
    <span className={`tag is-rounded ${style}`}>{TextName}</span>
  )
}
