// .5. TABLE

import './App.css';

import { Table } from 'antd';

function App5() {

    const data = [
        {
            name: 'Name 1',
            age: 10,
            address: 'Address 1',
            key: 1
        },
        {
            name: 'Name 2',
            age: 20,
            address: 'Address 2',
            key: 2
        },
        {
            name: 'Name 3',
            age: 30,
            address: 'Address 3',
            key: 3
        },
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key:'key',
            render: name => {
                return <a href='#' onClick={() => console.log(name)}>{ name }</a>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key:'key',
            sorter: (a,b) => a.age - b.age
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key:'key'
        },
        {
            title: 'Graduated',
            key:'key',
            render: payload => {
                return <p>{payload.age > 20 ? 'True' : 'False'}</p>
            }
        },  
    ]

  return (
    <div className="App">
      <header className="App-header">
        <Table
            dataSource={data}
            columns={columns}
        >    
        </Table>
      </header>
    </div>
  );
}

export default App5;
