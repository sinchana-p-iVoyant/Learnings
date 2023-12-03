// 8. SPIN

import { useState } from 'react';
import './App.css';

import { Spin, Button } from 'antd'

function App8() {

    const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Spin></Spin> */}
        <Spin spinning={false}></Spin>
        <Spin spinning={loading}></Spin>

        <Button onClick={() => {setLoading(preValue => !preValue)}}>Toggle Spinning</Button>

        <Spin spinning={loading}>
            <p>P tag 1</p>
            <p>P tag 2</p>
            <p>P tag 3</p>
        </Spin>

      </header>
    </div>
  );
}

export default App8;