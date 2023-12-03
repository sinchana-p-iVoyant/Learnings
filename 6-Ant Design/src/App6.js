// 6. ALERT & MESSAGE

import { useState } from 'react';
import './App.css';
import { Form, Input, Button, message, Alert } from 'antd';

function App6() {

    const [showAlert, setShowAlert] = useState(false)

    const handleOnFinish = (e) => {
        console.log(e)
        // Output: {username: 'Sinchana', password: '123'}
        
        // To mimic the behavior of API call
        setTimeout(() => {
            message.success("Login Success",)
            message.error("Login Failed",)
            message.warning("Login Failed",)

            setShowAlert(true)
        }, 500);

    }

  return (
    <div className="App">
      <header className="App-header">
        {
            showAlert &&
            <Alert 
                type='error'
                message='Error'
                description='There was an error on login' 
                closable
            />
        }
        <Form onFinish={handleOnFinish}>
            <Form.Item label='User Name' name='username'>
                <Input placeholder='User name' required></Input>
            </Form.Item>
            <Form.Item label='Password' name='password'>
                <Input.Password placeholder='Password' required/>
            </Form.Item>
            <Form.Item >
                <Button block type='primary' htmlType='submit'>Log In</Button>
            </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App6;
