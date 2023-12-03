// 3. SELECT

import './App.css';

import { Select } from 'antd'

function App3() {

    const fruits = ['Banana', 'Mango', 'Orange', 'Cherry']

  return (
    <div className="App">
      <header className="App-header">

        {/* <p>Which is your favorite fruit?</p>

        <Select placeholder='Select Fruit' style={ {width:'50%'} }>
            {
                fruits.map((fruit,index) => {
                    return <Select.Option key={index} value={fruit}></Select.Option>
                })
            }
        </Select> */}

        <p>Which are your favorite fruits?</p>

        <Select 
            mode='multiple'
            maxTagCount={2} 
            allowClear
            placeholder='Select Fruit' 
            style={ {width:'50%'} }>
            {
                fruits.map((fruit,index) => {
                    return <Select.Option key={index} value={fruit}></Select.Option>
                })
            }
        </Select>

        
      </header>
    </div>
  );
}

export default App3;
