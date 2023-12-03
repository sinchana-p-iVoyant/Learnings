// 10. PAGINATION, SORTING & FILTERS IN TABLE COMPONENT

import './App.css';
import { useEffect, useState } from 'react';

import { Table } from 'antd';


function App10() {

    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(15)

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setDataSource(data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }, []) 

    // object structure :
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    //   },
    
    const columns = [
        {
            key:'1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key:'2',
            title: 'User ID',
            dataIndex: 'userId',
            sorter: (record1, record2) => {
                return record1.userId > record2.userId
            }
        },
        {
            key:'3',
            title: 'Status',
            dataIndex: 'completed',
            render: (completed) => {
                return <p> { completed ? 'Complete' : 'In Progress' } </p>
            },
            filters: [
                {text:'Complete', value:true},  //if Text is "Complete", value will be "true"
                {text:'In Progress', value:false} 
            ], 
            onFilter: (value, record) => { 
                return record.completed === value 
            } 
        }
    ]

  return (
    <div className="App">
    <header className="App-header">
        <Table
            loading={loading}
            dataSource={dataSource}
            columns={columns}
            // pagination={false}
            
            // pagination={{
            //     current: 3,
            //     pageSize: 15
            // }}

            // pagination={{
            //     current: page,
            //     pageSize: pageSize,
            //     onChange: (page, pageSize) => {
            //         setPage(page);
            //         setPageSize(pageSize);
            //     }
            // }}                                           

            pagination={{
                current: page,
                pageSize: pageSize,
                total:500,
                onChange: (page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                    // Make the api call here with page and page size.
                }
            }}

        >
        </Table>
    </header>
    </div>
  );
}

export default App10;