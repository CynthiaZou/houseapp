import React, { Component } from 'react'
import { Flex, Carousel, Grid, WhiteSpace, WingBlank  } from 'antd-mobile'
import { connect } from 'react-redux'

import './Main.css'

// 引入请求函数==> 数据库炸了 模拟的死数据
// import { getHouselist } from '../../apis/apis.js';

// 8宫格 每个宫格的数据
const data = [{icon: 'icon_house1', text: '新房'},
            {icon: 'icon_house2', text: '二手房'},           
            {icon: 'icon_house3', text: '海外房产'},           
            {icon: 'icon_house4', text: '租房'},           
            {icon: 'icon_house5', text: '商住房'},           
            {icon: 'icon_house6', text: '住房'},           
            {icon: 'icon_house7', text: '学区房'},           
            {icon: 'icon_house8', text: '问答'},           
             ].map((_val) => ({
    icon: require('../../assets/imgs/'+ _val.icon +'.png'),
    text: _val.text
    } ));

class Main extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3'], //banner轮播图
        imgHeight: 188,
        city: '定位中',
        houselist:[
            {id: '1', name: '恒大华府', area: '锦江区 攀成钢', types: '四室两厅 208平', price: '19000', icon: 'icon_house1'},
            {id: '2', name: '恒大未来城', area: '高新区 长钢', types: '二室两厅 208平', price: '18000', icon: 'icon_house2'},
            {id: '3', name: '蓝光coco', area: '表羊区 嘻嘻街', types: '三室一厅 208平', price: '23000', icon: 'icon_house3'},
            {id: '4', name: '蓝光圣菲', area: '温江 攀成钢', types: '二室两厅 208平', price: '14000', icon: 'icon_house4'},
            {id: '5', name: '蓝光sofa', area: '武侯 哈哈街', types: '三室两厅 208平', price: '16000', icon: 'icon_house5'},
            {id: '6', name: '绿地新里城', area: '天府新区 攀成钢', types: '四室两厅 208平', price: '23000', icon: 'icon_house6'},
            {id: '7', name: '保利香槟', area: '青羊 中坝', types: '三室两厅 108平', price: '17000', icon: 'icon_house7'},
            {id: '8', name: '尚德', area: '天府新区 攀成钢', types: '二室两厅 98平', price: '25000', icon: 'icon_house8'},
            {id: '9', name: '华府之都', area: '天府新区 攀成钢', types: '三室一厅 110平', price: '33000', icon: 'icon_house9'},
            {id: '10', name: '南湖三千里', area: '天府新区 攀成钢', types: '一室两厅 80平', price: '19000', icon: 'icon_house10'},
        ]
      }
    
   
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                {/* topBar */}
                <div className='search_box' >
                    <label className='search_city' onClick={this.clickCity} >{ this.state.city } ▼</label>
                    <div className='search_center_box' onClick={this.clickSearch} >
                        <img src={require('../../assets/imgs/icon_search.png')} alt='#'/>
                        <label>海鸥房产,自由与家完美结合</label>
                    </div>
                <img  onClick={this.clickMap} src={require('../../assets/imgs/ditu.png')}  alt='#' />
                </div>

                {/* 轮播图 */}
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="#/reg" //假装跳转注册 页
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        src={require('../../assets/imgs/'+ val +'.jpg')}
                        alt="#"
                        style={{ width: '100%',verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: '188' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
               
               {/* flex图标 */}
               <Grid 
                    data={data} 
                    columnNum={4} 
                    hasLine={false}
                    square={true}
                    />

                <WhiteSpace style={{backgroundColor:'#f3f3f3'}} size="sm" />
                {/* 房产百科 */}
                <WingBlank size="lg">
                    <h3 style={{textAlign:'left', color:'blue',margin:0,padding:0,lineHeight:'40px'}}>房产全百科&nbsp;<small style={{fontWeight:'normal',color:'gray',}}>专业的买房攻略</small></h3>
                    {/* 四宫格 */}
                    <Flex justify="around" style={{color:'gray',fontSize:'12px',textAlign:'center',height:'80px'}}>
                        <div>
                            <img src={require('../../assets/imgs/icon_ency1.png')} style={{width:'30px',height:'30px'}}  alt='#'/>
                            <p  style={{lineHeight:'30px'}}>我要贷款</p>
                        </div>
                        <div>
                            <img src={require('../../assets/imgs/icon_ency2.png')} style={{width:'30px',height:'30px'}}  alt='#'/>
                            <p style={{lineHeight:'30px'}} >房贷</p>
                        </div>
                        <div>
                            <img src={require('../../assets/imgs/icon_ency3.png')} style={{width:'30px',height:'30px'}}  alt='#'/>
                            <p style={{lineHeight:'30px'}} >知识</p>
                        </div>
                        <div>
                            <img src={require('../../assets/imgs/icon_ency4.png')} style={{width:'30px',height:'30px'}}  alt='#'/>
                            <p style={{lineHeight:'30px'}} >扫一扫</p>
                        </div>
                    </Flex>

                </WingBlank>
                <WhiteSpace style={{backgroundColor:'#f3f3f3'}} size="sm" />
                
                {/* 猜你喜欢 */}
                <WingBlank size="lg">
                    <h3 style={{textAlign:'left', color:'blue',margin:0,padding:0,lineHeight:'40px'}}>猜你喜欢</h3>

                    {/* 渲染房产数据列表 */}
                    {
                        this.state.houselist.map(obj => <div key={obj.id} onClick={this.clickHouse.bind(this, obj)} className='liner'>
                            <img src={require('../../assets/imgs/'+ obj.icon +'.jpg')} style={{width:'30%'}} alt='#' />
                            <div className='content'>
                                <h3>{obj.name} </h3>
                                <p>{obj.area}</p>
                                <p>{obj.types}</p>
                            </div>
                            <label>{obj.price}/平</label>

                        </div>)

                    }

                </WingBlank>

            </div>
        )
    }

    // 点击房源信息
    clickHouse(obj) {
        console.log(obj) //循环出来的房源列表中每一条对象数据
        // alert('您浏览了'+ obj.name)
        this.props.dispatch({
            type: 'addHouse',
            obj //当前点击的房产数据
        })
    }

    componentDidMount() { // 节点初始化渲染完毕，可以开始请求用户定位
        /* // 请求获取房源信息
        let res = await getHouselist();//数据库炸了 干不起了！！
        console.log(res) */


        //  在这里保留this
        let _this = this
         //实例化城市查询类
         var citysearch = new window.AMap.CitySearch();

         //自动获取用户IP，返回当前城市
         citysearch.getLocalCity(function(status, result) {
             if (status === 'complete' && result.info === 'OK') {
                 if (result && result.city && result.bounds) {
                     var cityinfo = result.city;
                    //  var citybounds = result.bounds;
                    //  当前城市信息
                    // console.log(cityinfo) //成都市
                    // console.log(_this) //此处this指向undefined 需要在实例化城市查询之前保留this 使得this指向Main
                    //  document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({city: cityinfo})
                 }
             } else {
                //  document.getElementById('info').innerHTML = result.info;
                console.log(result.info)
             }
         });
    }

    // 点击选择城市
    clickCity() {
        window.location.href = '#/selectcity' //location是挂在全局上的方法 而react是一个独立的作用域 so需要加上window.
    }
    // 点击选择搜索
    clickSearch() {
        window.location.href = '#/search'
    }
    // 点击选择地图
    clickMap() {
        window.location.href = '#/mymap'

    }



}

export default connect()(Main)
