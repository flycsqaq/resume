import React from 'react'

import Base from './base'
import Work from './work'
import Project from './project'
import Evalute from './evaluate'
import Skill from './skill'
import Personal from './personal'
import mountain from '../../assets/mountain.jpg'
export default () => {
  return (
    <div>
      <div className={'banner'}>
        <img src={mountain} alt={''} />
      </div>
      <main className={"layout"}>
        <Base />
        <Work />
        <Project />
        <Skill />
        <Evalute />
        <Personal />
      </main>
    </div>
  )
}