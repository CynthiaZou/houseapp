import { createStore, combineReducers } from 'redux'

// 创建小状态(reducer)
function historylist(state = [], action) {
    switch(action.type) {
        case 'addHouse' : 
            // 循环先看有没有重复的 ===> 去重 并保证新点击添加的足迹放到最前面
            // for(let i=0; i< state.length; i++) {
            //     if(state[i].id == action.obj.id) {
            //         state.splice(i,1)
            //         break;
            //     }
            // }
            // 返回添加数据后的新数组
            return [...new Set([action.obj, ...state])]

        default: return state
    }
}

function user(state = '龙公子',action) {
    switch(action.type){
        default: return state
    }
}

function age(state = '18',action) {
    switch(action.type){
        default: return state
    }
}

// 合并各个小状态
let reducers = combineReducers({
    user,
    age,
    historylist
})

// 创建store并暴露
export default createStore(reducers)

