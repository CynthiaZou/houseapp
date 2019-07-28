import React, { Component } from 'react'
import './Selectcity.css'
import city from '../json/city.json'

// 引入better-scroll
import BScroll from 'better-scroll'

export default class Selectcity extends Component {
    render() {
        return (
            <div>
                 {/* 标题 */}
                  <div className='select_title' size="md">
                        <img onClick={this.clickReback.bind(this)} src={require('../assets/imgs/icon_close.png')} style={{width:'26px'}} alt='#'/>
                        <label>选择城市</label>
                  </div>

                  {/* 显示城市选择区域 */}
                  <div className='container'>
                        {/*   左侧 */}
                        <div id='left_box'>
                              {/* bs 固定容器 */}
                              <ul style={{padding:0}} className='content'>
                                    <div className="select_list">
                                          {/* 热门城市 */}
                                          <div>
                                                <h3 className="city-letter">热门城市</h3>
                                                <div style={ {display: 'flex', flexWrap:'wrap'} }>
                                                      {
                                                            city.hotcity.map( (obj,i) => <div key={i} style={{width:'25%',height:'40px',lineHeight:'40px'}}>{obj} </div>)
                                                      }
                                                </div>
                                          </div>
                                          
                                          {/* 城市列表 */}
                                          <div>
                                                {
                                                city.citys.map((haha,i) => <div key={i} id={haha.title}>
                                                      {/* 标题 */}
                                                      <h3 className="city-letter">{haha.title}</h3>
                                                      {/* 详细列表 */}
                                                      <div style={{ display:'flex',flexWrap:'wrap'}}>
                                                            {
                                                                  haha.lists.map((name,i) =><div key={i} style={{width:'25%',height:'40px',lineHeight:'40px'}}>
                                                                        {name}
                                                                  </div>)
                                                            }
                                                      </div>

                                                </div>)
                                                }
                                          </div>
                                    </div>
                              </ul>
                        </div>

                        {/* 右侧 字母索引 */}
                        <div onTouchMove={this.touchMove.bind(this)} className='select_letter'>
                              {
                                    city.citys.map((obj,i) =><div className='letter_cls' key={i} onClick={this.clickToLeft.bind(this, obj.title)}>
                                          { obj.title }
                                    </div>)
                              }
                        </div>

                </div>

            </div>


        )
     }

//      点击返回主页
clickReback() {
      // console.log(this)
      window.location.href = '#/'
}

      // 手指在屏幕上滑动时连续触发
      touchMove(e){
            // 当前手指所触摸位置的坐标  =====> 移动端独有！ pc端没有哒！！
            // console.log(e.touches[0].clientX)
            // console.log(e.touches[0].clientY)

            // 方法：elementFromPoint 根据坐标位置 获取当前坐标位置的  元素！！
            // 获取坐标点
            let curEle = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
            // 判断 ==> 若该坐标位置的元素存在 且 得到指定想获取的元素(通过统一设置类名获取)
            if(curEle && curEle.className === 'letter_cls') {
                  // 让左侧城市列表滚动到指定元素(div)位置
                  // console.log(this)//undefined ==> 原因是定义事件处未bind一个this  已解决  ==>让this指向当前Selectcity组件
                  this.leftScroll.scrollToElement(document.getElementById(curEle.innerHTML), 300)
            }
      }

      // 点击滑动到对应位置
      clickToLeft(title) {
            console.log(title)
            this.leftScroll.scrollToElement(document.getElementById(title))  //=====> 这种简单的点击处理 被上面这种流行的touchMove事件代替啦！！
      }

     // 加载完毕
     componentDidMount() {
            // 初始化左侧滚动区域
            this.leftScroll = new BScroll('#left_box')

     }
}
