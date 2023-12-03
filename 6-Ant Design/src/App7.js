// 7. DatePicker, RangePicker and TimePicker

import './App.css';
import { DatePicker, TimePicker } from 'antd';

function App7() {

  return (
    <div className="App">
      <header className="App-header">
        <DatePicker />
        <DatePicker picker='date'/>
        <DatePicker picker='week'/>
        <DatePicker picker='month' />
        <DatePicker picker='year'/>
        <DatePicker picker='quarter' />

        <DatePicker.RangePicker />
        <DatePicker.RangePicker picker='month'/>

        <TimePicker />
        <TimePicker.RangePicker />

      </header>
    </div>
  );
}

export default App7;