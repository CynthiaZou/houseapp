import { createStore, combineReducers } from 'redux'

// 定义多个小reducer
function name(state = '大哈',action){
    switch(action.type) {
        case 'changeName' : return '小哈哈'
        default: return state
    }
}
function age(state = 18,action){
    switch(action.type) {
        // case 'changeAge' : return 60
        case 'changeAge' : return state+10
        default: return state
    }
}
function fav(state = '泛舟',action){
    switch(action.type) {
        default: return state
    }
}

// 合并到一个大的reducers中
let reducers = combineReducers({
    name,
    age,
    fav
})

// 创建并暴露store
const Store =  createStore(reducers)


// action通知
Store.dispatch({
    type: 'changeAge',
    
})

// console.log(Store.getState()) //查看状态

// 暴露
export default Store;
