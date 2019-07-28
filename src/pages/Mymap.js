import React, { Component } from 'react'

export default class Mymap extends Component {
    state = {
        city: '定位中'
    }
    render() {
        return (
            <div>
                <div style={{height:'66px',lineHeight:'66px',color:'#fff',fontSize:'26px',textAlign:'center',backgroundColor:'blue'}}>{this.state.city}</div>
                {/* 地图容器 */}
                <div id='container' style={{width:'100%', height:'600px',backgroundColor:'pink'}}></div>
                
            </div>
        )

    }

    componentDidMount(){
        
        let _this = this;
        var map = new window.AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom:11, //初始化地图层级
            center: [116.397428, 39.90923] //初始化地图中心点
        });
 
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    console.log(_this)
                    _this.setState({city: cityinfo})
                    // 地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info)
            }
        });
    }
}
