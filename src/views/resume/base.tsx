import React from 'react'
import { Paper } from '../../shared/paper';
export default () => {
  return (
    <Paper contentClass={'base level2'}>
      <h1>基本信息</h1>
      <dl>
        <dt>姓名</dt>
        <dd>周飞宇</dd>
        <dt>邮箱</dt>
        <dd>hellozfy15@163.com</dd>
        <dt>联系电话</dt>
        <dd>18158512843</dd>
        <dt>毕业学校</dt>
        <dd>中国计量大学(2015.09-2019.06)</dd>
      </dl>
    </Paper>
  )
}