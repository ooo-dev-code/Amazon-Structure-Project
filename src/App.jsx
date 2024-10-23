import React from 'react'
import Search_Bar from './Components/Search_Bar'
import Delete_body_margin from './Components/Delete_body_margin'
import Sell from './Components/Sell'
import Scroll from './Components/Home'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Delete_body_margin />
      <Search_Bar />
      <Sell />
      <Scroll />
    </div>
  )
}

export default App;
