import React, { Component } from 'react'
import { Button } from 'antd-mobile'

// redux状态机 数据交互 示例
import { connect } from 'react-redux'

class Chat extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',backgroundColor:'#f3f3f3'}}>
                <div style={{width:'80%',height:'60%',backgroundColor:'white',textAlign:'center'}}>
                    <img src={require('../../assets/imgs/avatar.jpg')} style={{width:'30%',margin:'20px auto'}} alt='#'/>
                    <p style={{lineHeight:'30px'}}>置业顾问：黄大哈</p>
                    <p style={{lineHeight:'30px'}}>专心服务诚心做人诚心做事</p>
                    <Button type='primary' style={{marginLeft:'30%',marginTop:'10px',width:'40%'}}>我要聊天</Button>
                    <h1>{this.props.user}今年{this.props.age}岁了！！ </h1>
                </div>
            </div>
        )
    }
}

// 过滤数据函数
function filter(state) {
    return {
        user: state.user,
        age: state.age
    }
}

export default connect(filter)(Chat)
