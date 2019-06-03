import React from 'react'
import { Paper } from '../../shared/paper';

export default () => {
  return (
    <Paper contentClass={'level2 skill'}>
      <h1>技能</h1>
      <ol>
        <li>熟悉HTML5,CSS3,JavaScript,了解浏览器工作原理。</li>
        <li>熟悉Vue及全家桶，了解React及Angular，能根据需求独立开发组件。</li>
        <li>了解TypeScript。</li>
        <li>了解打包工具Webpack，了解版本控制工具Git。</li>
        <li>了解Python及后端框架django。</li>
      </ol>
    </Paper>
  )
}