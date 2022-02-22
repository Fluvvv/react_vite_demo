import './index.scss'
import React, { useState, useEffect, useRef } from 'react'
import { DatePicker, Button, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getName } from '@/store/actions'
import moment from 'moment'
import { home } from '@/api/home.jsx'

const { RangePicker } = DatePicker

export default function Home() {
  const container = useRef()
  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.home)

  const [arr, setArr] = useState([])
  useEffect(() => {
    // console.log(import.meta.env);
    const controller = new AbortController()
    fetchData(controller)
    return () => controller.abort()
  }, [])

  async function fetchData(controller) {
    const aa = await getArrHandle()
    setArr(aa.data)
  }

  function getArrHandle() {
    return new Promise((res) => {
      // 模拟API请求返回
      setTimeout(() => {
        res({
          code: 200,
          message: 'ok',
          data: ['aa', 'bb', 'cc', 'dd', 'ee']
        })
      }, 1500)
      //   console.log('返回数据');
    }).then((res) => {
      //   console.log('输出then');
      return res
    })
  }

  function delHandle(e) {
    let clone = JSON.parse(JSON.stringify(arr))
    clone.splice(e, 1)
    setArr(clone)
  }

  function initName(e) {
    console.log('初始化姓名执行！')
    dispatch(getName())
  }

  const [imgUrl, setImgUrl] = useState('')
  async function initData() {
    try {
      const { data } = await home({ who: 'fanjiquan' })
      console.log(data)
      if (data.code === 200) {
        setImgUrl(data.imgUrl)
        message.success(data.msg)
      } else {
        message.error(data.msg)
      }
    } catch (error) {
      console.log('home页异常', error)
    }
  }

  return (
    <div ref={container} style={{ width: '100%', minHeight: '75vh', background: `url(${imgUrl})` }}>
      <Button type='primary' onClick={initData}>
        请求图片
      </Button>
      <Button type='primary' onClick={initName}>
        {name}
      </Button>
      <RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')]
        }}
      />
      <ul>
        {arr.map((value, index) => {
          return (
            <li className='li_box' key={index} onClick={() => delHandle(index)}>
              嘻嘻 {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
