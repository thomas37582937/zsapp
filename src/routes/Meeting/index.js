import React from 'react'
import Meeting_0 from './Meeting_0'
import Meeting_1 from './Meeting_1'
import Meeting_2 from './Meeting_2'
import Meeting_3 from './Meeting_3'
import Layout from '../../components/Layout'

const Meet_0 = ({...context}) => (
  <Layout {...context}>
    <Meeting_0 />
  </Layout>
)
const Meet_1 = ({...context}) => (
  <Layout {...context}>
    <Meeting_1 />
  </Layout>
)
const Meet_2 = ({...context}) => (
  <Layout {...context}>
    <Meeting_2 />
  </Layout>
)
const Meet_3 = ({...context}) => (
  <Layout {...context}>
    <Meeting_3 />
  </Layout>
)


export {Meet_0,Meet_1,Meet_2,Meet_3}