import React from 'react'

export function Paper(props: any) {
  return (
    <div
      className={props.containerClass ? `paper-container ${props.containerClass}`: 'paper-container'}
      style={props.containerStyle? props.containerStyle: {}}
      onMouseEnter={props.onMouseEnter ? props.onMouseEnter: () => {}}
      onMouseLeave={props.onMouseLeave ? props.onMouseLeave: () => {}}
    >
      <div className={props.contentClass ? `paper ${props.contentClass}`: 'paper'}
        style={props.contentStyle? props.contentStyle: {}}
      >
        {props.children}
      </div>
    </div>
  )
}