// 11. SELECT ROWS & ADD CUSTOM SELECTION OPTIONS

import React, { useState } from 'react'
import './App.css'

import { Table, Tag } from 'antd'

const App11 = () => {

  const [alreadySelectedRows, setAlreadySelectedRows] = useState(['1', '3']) // key: 1 & 3 are auto-selected.

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id'
    },
    {
      title: 'Student Name',
      dataIndex: 'name'
    },
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      // 1. CREATE TAGS
      render: (tag) => {
        const color = tag.includes('A') ? 'Green' : tag.includes('B') ? 'blue' : 'red'
        // return <Tag>{tag}</Tag>
        return <Tag color={color} key={tag}>{tag}</Tag>
      }
    },
  ]

  const dataSource = [
    {
      key: '1',
      id: 1,
      name: 'Student 1',
      grade: 'A+'
    },
    {
      key: '2',
      id: 2,
      name: 'Student 2',
      grade: 'A'
    },
    {
      key: '3',
      id: 3,
      name: 'Student 3',
      grade: 'B'
    },
    {
      key: '4',
      id: 4,
      name: 'Student 4',
      grade: 'A+'
    },
    {
      key: '5',
      id: 5,
      name: 'Student 5',
      grade: 'C'
    },
    {
      key: '6',
      id: 6,
      name: 'Student 6',
      grade: 'A'
    },
  ]

  return (
    <div className='App'>
      <Table
        columns={columns}
        dataSource={dataSource}
        // 2. ROW SELECTION

        // rowSelection={true}

        // rowSelection={{
        //   type: 'radio',
        //   onSelect: (record) => {
        //     console.log(record)
        //   }
        // }}

        // rowSelection={{
        //   type: 'checkbox',
        //   onSelect: (record) => {
        //     console.log(record)
        //   }
        // }}

        rowSelection = {{
          type: 'checkbox',
          // 3. AUTO SELECTION
          selectedRowKeys: alreadySelectedRows,   // By-Default
          onChange: (keys) => {  
            console.log(`Onchange Keys: `)    // prints only "Selected" keys
            console.log(keys)                 // After User Changes
            setAlreadySelectedRows(keys)
          },
          onSelect: (record) => {
            console.log(record)         // {key: '1', id: 1, name: 'Student 1', grade: 'A+'}
          },
          // 4. DISABLE SELECTION
          getCheckboxProps: (record) => ({
            disabled: record.grade === 'C'
          }),
          
          // 5. HIDE SELECTION
          // hideSelectAll:true,

          // 
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            // To Show Our Custom Selection Options
            {
              key:'even',
              text: 'Select Even Rows',
              onSelect: (allKeys) => {      // gets all the "available - KEYS" in "allKeys"
                console.log(allKeys)  // o/p: (5) ['1', '2', '3', '4', '6']
                const selectedKeys = allKeys.filter(key => {
                  return key % 2 == 0
                })
                setAlreadySelectedRows(selectedKeys)
              }
            },
            {
              key:'excellent',
              text: 'Select Students with Excellent Grades',
              onSelect: (allKeys) => {
                console.log(allKeys)    // o/p: (5) ['1', '2', '3', '4', '6']
                const selectedKeys = allKeys.filter(key => {
                  const isExcellent = dataSource.find(student => {
                    return student.key == key && student.grade.includes('A') 
                  })
                  return isExcellent
                })
                setAlreadySelectedRows(selectedKeys)
              }
            }
          ]

        }}

      >
      </Table>
    </div>
  )
}

export default App11
