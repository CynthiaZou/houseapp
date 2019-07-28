import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button,    } from 'antd-mobile'
import { Link } from 'react-router-dom'

let logo = { width:'60%',margin:'30px' }

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            acc: '',
            pwd: ''
        }
    }
    
    render() {
        return (
            <div>
                {/* <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" /> */}
                <Flex justify="center">
                    <img style={ logo } src={ require('../assets/imgs/logo.jpg') } alt='#'/>
                </Flex>

                <WhiteSpace size="xl" />

                <WingBlank size='lg'>
                    <InputItem
                        placeholder="请输入用户名"
                        value={this.state.acc}
                        onChange={(val) => {this.setState({acc: val})}}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${ require('../assets/imgs/logo_user.png') })`,backgroundSize: 'cover', height: '26px', width: '26px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        type='password'
                        onChange={(val) => {this.setState({pwd: val})}}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${ require('../assets/imgs/logo_pwd.png') })`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size="xl" />
                    <Button type="primary">登录</Button>

                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link style={{color: 'blue'}} to='/reg'>手机快速注册</Link>
                        <Link style={{color: 'blue'}} to='/forgetpwd'>忘记密码？</Link>
                    </Flex>
                </WingBlank>

                <Flex justify="center">
                    <Link style={ {position:'absolute',bottom:'20px',color:'#ccc'} } to='/protocol'>登录/注册即代表同意《海鸥房产用户协议》</Link>
                </Flex>

            </div>
        )
    }
}
