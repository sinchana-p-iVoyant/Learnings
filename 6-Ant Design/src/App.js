// import 'antd/dist/antd.css';
// 1. BUTTON

import './App.css';
import { Button } from 'antd'
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';

function App() {

  const [loading, setLoading] = useState(false)

  const onButtonCLick = (e) => {
    console.log("Button Clicked!")

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Button type='primary'>My First Button</Button> */}
        {/* <Button type='link'>My First Button</Button> */}
        {/* <Button type='link' href='https://www.google.com'>My First Button</Button> */}
        <Button 
          type='primary'
          block
          loading={loading}
          icon = { <PoweroffOutlined /> }
          className='my-button'
          // style={ {backgroundColor: 'orange', color:'red'} }
          onClick={onButtonCLick}
        > My First Button </Button> 
        
      </header>
    </div>
  );
}

export default App;
