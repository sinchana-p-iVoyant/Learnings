// 4. FORM

import './App.css';
import { Form, Input, Button } from 'antd';

function App4() {

    const handleOnFinish = (e) => {
        console.log(e)
        // Output: {username: 'Sinchana', password: '123'}
    }

  return (
    <div className="App">
      <header className="App-header">
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

export default App4;
