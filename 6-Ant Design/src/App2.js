// 2. INPUT

import './App.css';

import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons'; 

function App2() {

  return (
    <div className="App">
      <header className="App-header">

        {/* <Input
            placeholder='Name'
            maxLength={10}
            type='password'
            prefix={ <UserOutlined /> }
            // suffix={ <UserOutlined /> }
            allowClear
            // disabled={var}
        ></Input> */}

        <Input.Search
            placeholder='Name'
            maxLength={10}
            type='password'
            prefix={ <UserOutlined /> }
            // suffix={ <UserOutlined /> }
            allowClear
            // disabled={var}
        />
        
      </header>
    </div>
  );
}

export default App2;
