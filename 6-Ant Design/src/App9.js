// 9. PROGRESS

import './App.css';

import { Progress } from 'antd';

function App9() {


  return (
    <div className="App">
    <header className="App-header">
        <Progress 
            percent={33}
        />
        <Progress 
            percent={33}
            type='circle'
        />
        <Progress 
            percent={57}
            type='circle'
            status='success'
        />
        <Progress 
            percent={67}
            type='circle'
            status='exception'
        />
        <Progress 
            percent={33}
            type='line'
            strokeColor='red'
        />
        <Progress 
            percent={33}
            type='line'
            strokeColor='red'
            strokeWidth={50}  
        />
        <Progress 
            percent={33}
            type='line'
            strokeColor='red'
            strokeWidth={50}
            status='active'  
        />
        <Progress 
            percent={33}
            type='line'
            status='success'  
        />
        <Progress 
            percent={33}
            type='line'
            steps={10}  
            strokeWidth={30}
        />
    </header>
    </div>
  );
}

export default App9;