import React from 'react'

const ChildComponent = (props) => {
  props.updateParent("I'm updated by ChildComponent")

  return <div>I'm a child component of: {props.applicationName}</div>
}

export default ChildComponent