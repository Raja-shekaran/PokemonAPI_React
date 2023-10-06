import React from 'react'
import Input from 'antd/es/input/Input';
import "./Content.css"
import { Button } from 'antd';

function Content() {
    return (
        <div className='container'>
            <Input type='text' />
            <Button type='submit'>Search Pokemon</Button>
        </div>
    );
  }

export default Content