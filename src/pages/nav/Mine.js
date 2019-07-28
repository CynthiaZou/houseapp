import React, { Component } from 'react'
import { Card, List } from 'antd-mobile'

const Item = List.Item;

export default class Mine extends Component {
    constructor() {
        super()
        this.state = {
            mylist: [
                {id: '1', name: '我的积分', src: 'icon_my1'},
                {id: '2', name: '我的订阅', src: 'icon_my2'},
                {id: '3', name: '微聊联系人', src: 'icon_my3'},
                {id: '11'},
                {id: '4', name: '房贷计算器', src: 'icon_my4'},
                {id: '5', name: '我的房子', src: 'icon_my5'},
                {id: '12'},
                {id: '6', name: '我的看房记录', src: 'icon_my6'},
                {id: '7', name: '我的问答', src: 'icon_my7'},
                {id: '13'},
                {id: '8', name: '设置', src: 'icon_my8'},
                {id: '9', name: '意见反馈', src: 'icon_my9'},
            ]
        }
    }
    render() {
        return (
            <div>
                <Card full style={{backgroundColor:'blue'}}>
                    {/* 我的 标题 */}
                    <Card.Header/>
                        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center' }} >
                            <img src={require('../../assets/imgs/avatar.jpg')} style={{width:'80px'}} alt='#' />
                            <div style={{ marginLeft: '-40px' }}>
                                <h3 onClick={this.clickLogin} style={{paddingTop:'20px'}}>登录/注册</h3>
                                <p onClick={this.clickChat} style={{lineHeight:'40px'}}>可以与经纪人发起聊天</p>
                            </div>
                            <img src={require('../../assets/imgs/icon_setting.png')}  style={{width:'40px'}} alt='#'/>
                        </div>
                    {/* 我的 标题内容 */}
                    <Card.Body>
                        <div style={{display:'flex',justifyContent:'space-around'}}>
                            <div style={{borderRight:'1px solid #fff',textAlign:'center',width:'100px'}}>
                                <h4 style={{fontSize:'16px',lineHeight:'30px'}}>0</h4>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={require('../../assets/imgs/icon_card.png')} style={{width:'28px'}} alt='#' />
                                    <label style={{fontSize:'14px'}}>钱包</label>
                                </div>
                            </div>
                            <div style={{borderRight:'1px solid #fff',textAlign:'center',width:'100px'}}>
                                <h4 style={{fontSize:'16px',lineHeight:'30px'}}>0</h4>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={require('../../assets/imgs/icon_discount.png')} style={{width:'28px'}} alt='#' />
                                    <label style={{fontSize:'14px'}}>优惠</label>
                                </div>
                            </div>
                            <div style={{borderRight:'1px solid #fff',textAlign:'center',width:'100px'}}>
                                <h4 style={{fontSize:'16px',lineHeight:'30px'}}>0</h4>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={require('../../assets/imgs/icon_score.png')} style={{width:'28px'}} alt='#' />
                                    <label style={{fontSize:'14px'}}>积分</label>
                                </div>
                            </div>
                            
                        </div>
                    </Card.Body>
                </Card>

                {/* 主体内容 列表组件*/}
                <List>
                    {
                        this.state.mylist.map(obj => {
                            // 如果有src 则返回Item组件
                            if(obj.src) {
                                return <Item 
                                    style={{height:'50px'}}
                                    key={obj.id}
                                    thumb={require('../../assets/imgs/'+ obj.src +'.png')}
                                    arrow="horizontal"
                                    onClick={this.clickIcons.bind(this,obj.name)}
                                    >{ obj.name }</Item>
                            }else {
                                return <div key={obj.id} style={{height:'10px',backgroundColor:'#f4f4f4'}}></div>
                            }
                        })

                    }
                    
                </List>
                


            </div>
        )
    }

    // 
    clickIcons(name) {
        console.log(name)
    }
    // 点击登录
    clickLogin(){
        window.location.href = '#/login'
    }

    
    // 点击进入微聊
    clickChat(){
        window.location.href = '#/chat'
    }

}
