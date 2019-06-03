import React from 'react'
import { Paper } from '../../shared/paper';

export default () => {
  return (
    <Paper contentClass={'work level3'}>
      <h1>实习经历</h1>
      <dl>
        <dt>杭州谷逸网络科技有限公司(2018.12-2019.02)</dt>
        <dd>
          <ol>
            <li>维护谷神星旧项目，修改bug，增强系统稳定性</li>
            <li>参与谷神星新项目开发</li>
            <li>与后端同事接口对接</li>
          </ol>
        </dd>
      </dl>
    </Paper>
  )
}