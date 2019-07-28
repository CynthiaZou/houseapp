import React, { Component } from 'react'
// 路由
import { HashRouter, Switch, Route } from 'react-router-dom'

import Nav from './pages/nav/Nav'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Forgetpwd from './pages/Forgetpwd'
import Protocol from './pages/Protocol'
import Selectcity from './pages/Selectcity'
import Search from './pages/Search'
import Mymap from './pages/Mymap'
import Error from './pages/Error'

// redux
import { Provider } from 'react-redux'
import store from './storehouse'

export default class App extends Component {
    render() {
        return (
            // 顶级组件中所有组件用provider包裹 然后把store当成属性传值进去 所有组件就都能store中的值 
            <Provider store={store}> 
                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/forgetpwd' component={Forgetpwd}></Route>
                        <Route path='/protocol' component={Protocol}></Route>
                        <Route path='/selectcity' component={Selectcity}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/mymap' component={Mymap}></Route>

                        {/* 页面404 */}
                        <Route component={Error}></Route>
                    </Switch>
                </HashRouter>

            </Provider>
        )
    }
}

