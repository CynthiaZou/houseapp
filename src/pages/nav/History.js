import React, { Component } from 'react'
// import store from '../../storehouse.js'
import { WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'

import './Main.css'

/* 改造类组件 以便接收到store中的数据  */
class History extends Component {
    render() {
        // console.log(this.props.historylist)
        let { historylist } = this.props;
        return (
            <WingBlank size="lg">
                <h3 style={ {lineHeight:'40px',textAlign:'center', display: historylist.length === 0 ? 'block' : 'none'} }>亲您目前还没有留下任何足迹…</h3>

                 {
                    historylist.map(obj => <div key={obj.id} className='liner'>
                        <img src={require('../../assets/imgs/'+ obj.icon +'.jpg')} style={{width:'70px'}} alt='#' />
                        <div className='content'>
                            <h3>{obj.name} </h3>
                            <p>{obj.area}</p>
                            <p>{obj.types}</p>
                        </div>
                        <label>{obj.price}/平</label>

                    </div>)

                    }
            </WingBlank>
        )
    }

}

// 过滤数据函数 把该组件要用到的属性写到这里 
function fuc(state) {

    return { historylist: state.historylist} // 获取房源列表数组
}

export default connect(fuc)(History)
