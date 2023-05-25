import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAcion = data =>({type:INCREMENT,data})
export const createDecrementAcion = data =>({type:DECREMENT,data})
//异步action 返回值为函数,因为函数里面能开启异步任务
export const createIncrementAsyncAcion = (data,time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAcion(data))
    },time)
  }
}