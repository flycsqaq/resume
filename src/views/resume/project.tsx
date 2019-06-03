import React from 'react'
import { Paper } from '../../shared/paper';

export default () => {
  let number = 1

  function handleIncrease(counter: number): void {
    const project = document.getElementsByClassName('project')[0] as HTMLElement
    const id = setInterval(changeTransform, 16)
    let count: number = 0

    function changeTransform(): void {
      if (count++ < counter * 5) {
        number += .02
        project.style.transform = `scale(${number}, ${number})`
      } else {
        clearInterval(id)
      }
    }
  }
  function handleInit(): void {
    const project = document.getElementsByClassName('project')[0] as HTMLElement
    const id = setInterval(changeTransform, 16)
    function changeTransform() {
      if (number === 1) {
        clearInterval(id)
      } else {
        if (number > 1) {
          number -= .02
        } else {
          number += .02
        }
        project.style.transform = `scale(${number}, ${number})`        
      }
    }
  }
  function handleDecrease(counter: number) {
    const project = document.getElementsByClassName('project')[0] as HTMLElement
    const id = setInterval(changeTransform, 16)
    let count: number = 0
    
    function changeTransform() {
      if (count++ < counter * 5) {
        number -= .02
        project.style.transform = `scale(${number}, ${number})`
      } else {
        clearInterval(id)
      }
    }
  }
  return (
    <Paper contentClass={'project level3'} 
      contentStyle={{transform: 'scale(1, 1)'}} 
      onMouseEnter={() => handleIncrease(3)}
      onMouseLeave={() => handleInit()}>
      <div className={'btn-group'}>
        <button onClick={() => handleIncrease(1)}>+</button>
        <button onClick={() => handleDecrease(1)}>-</button>
      </div>
      <h1>项目经历</h1>
      <dl>
        <dt>1. NAS</dt>
        <dd>
          参与谷神星NAS系统开发，支持远程web端对主机系统的控制，
          满足非技术人员对系统的远程可视化操作需求，利用vue及其全
          家桶提供技术支持，我主要参与用户信息及登录模块开发，已交付使用。
        </dd>
        <dt>2. 笔试系统</dt>
        <dd>参与谷神星程序员面试题系统开发，支持外网作答笔试题，满足公司对应聘人员的笔试筛选，利用vue提供技术支持，我主要参与后台审题及答题
          模块开发，已有约三百人参与答题，答题过程无bug。</dd>
      </dl>
    </Paper>
  )
}