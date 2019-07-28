import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import Main from './Main'
import Chat from './Chat'
import History from './History'
import Mine from './Mine'

export default class Nav extends Component {
    constructor() {
        super();

        this.state = {
          selectedTab: 'Main', //默认选中
          iconList:[
            { id: 'Main', title: '首页', icon: 'icon_main'},
            { id: 'Chat', title: '微聊', icon: 'icon_chat'},
            { id: 'History', title: '历史', icon: 'icon_history'},
            { id: 'Mine', title: '我的', icon: 'icon_mine'},
          ]
        };
      }
    
    render() {
        return (
          <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <TabBar
                unselectedTintColor="#949494" //未选中的字体颜色
                tintColor="#33A3F4" //选中的字体颜色
                barTintColor="white" //tabbar条的背景色
                >
                
              { //循环创建数据列表

                this.state.iconList.map(obj => <TabBar.Item
                  title={ obj.title }
                  key={ obj.id }
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/imgs/'+ obj.icon +'.png')}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/imgs/'+ obj.icon +'_on.png')}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === obj.id }
                  onPress={() => {
                    this.setState({
                      selectedTab: obj.id,
                    });
                  }}
                >
                  {this.renderContent()}
                </TabBar.Item>)
              }
            </TabBar>
          </div>
        )
    }

     // 子页面渲染
     renderContent() {
      //  console.log(this.state.selectedTab) //4个main
        switch(this.state.selectedTab) {
          case 'Main' : return <Main/>
          case 'Chat' : return <Chat/>
          case 'History' : return <History/>
          case 'Mine' : return <Mine/>
          
          default: return <Main/>
        }
    }

}
