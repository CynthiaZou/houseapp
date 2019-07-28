import React, { Component } from 'react'
import { InputItem, WingBlank, Checkbox, Flex, Button, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'


const AgreeItem = Checkbox.AgreeItem;

export default class Reg extends Component {
    render() {
        return (
            <div style={ {marginTop:'30px'} }>
                <WingBlank size='lg'>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        >
                    </InputItem> 
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        >
                    </InputItem>
                    <InputItem
                        type="text"
                        placeholder="请输入验证码"
                        >
                        {/* <span style={{ textAlign: 'left' }} >获取验证码</span> */}
                    </InputItem>

                    <Flex jusityfy='center'>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                            <a href='#/protocol' onClick={(e) => { e.preventDefault(); alert('agree it'); }}>
                                我已同意<span style={ {color:'blue'} }>《用户服务协议》及《隐私权政策》</span>
                            </a>
                        </AgreeItem>
                    </Flex>

                    <WhiteSpace size="lg" />
                    <Button type="primary">注册</Button>

                    <WhiteSpace size="lg" />
                    <Link style={ {color:'blue'} } to='/login'>已有账号</Link>


                </WingBlank>
            </div>
        )
    }
}
