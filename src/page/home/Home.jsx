import React from 'react'
import Introduce from './components/introduce-section/Introduce';
import Tools from './components/tools/Tools';
import Feature from './components/feature/Feature';
import Benefit from './components/benefit/Benefit';
import Form from './components/form/form';

const Home = () => {
  return (
    <div>
      <Introduce/>
      <Tools/>
      <Feature/>
      <Benefit/>
      <Form/>
    </div>
  )
}

export default Home