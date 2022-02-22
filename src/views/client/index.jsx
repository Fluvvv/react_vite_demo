import React from 'react'
import Line from './components/Line/index.jsx'
import Pie from './components/Pie/index.jsx'
import SvgIcon from '@/components/SvgIcon'
import styled from 'styled-components'

const Div = styled.div`
  border: 1px solid red;
`

export default function index() {
  return (
    <>
      <Div>滴滴滴</Div>
      <div>
        <SvgIcon name='word' cln={'svg_icon'} />
        <SvgIcon name='image' />
        <SvgIcon name='download' />
      </div>
      <Line />
      <Pie />
    </>
  )
}
