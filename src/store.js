/* 
核心：
    store
    action
    reducer

*/

import { createStore } from 'redux'

// console.log(store) //此时应该为undefined
// 创建store
const store = createStore(function(state = '默认值',action) {
    // console.log(store) //默认值 

    // 仓库中有一个函数 可以用来设置新的state值 
    switch(action.type) {
        // return出去的是新的值 
        case 'mytest' : return '新的值 '

        // return出去的默认值 
        default: return state;
    }
})

/* // action发出通知
 let a = {
    type: 'mytest'
 }
//  发出通知
store.dispatch(a) */

// action发通知
store.dispatch({
    type: 'mytest'
})

// console.log(store)
// console.log(store.getState())

//  暴露
export default store;



