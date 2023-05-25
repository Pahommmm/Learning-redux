import React, { Component } from 'react'
import { 
  createIncrementAcion,
  createDecrementAcion,
  createIncrementAsyncAcion 
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class Count extends Component {
  state = {
    carName:'audi'
  }

  increment = ()=>{
    const {value} = this.selectNumber
    this.props.jia(value*1)
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.jian(value*1)
  }
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
    
  }
  incrementAsync = ()=>{
    const {value} = this.selectNumber
    this.props.jiaAsync(value*1,500)
    
  }
  render() {
    return (
      <div>
        <h1>当前的求和为:{this.props.count}</h1>
        <select ref={(c) => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//a函数的返回值作为状态传递给了UI组件,
// const mapStateToProps = state =>({count:state})
// const mapDispathToProps = dispatch=>(
//   {
//     jia:number =>dispatch(createIncrementAcion(number)),
//     jian:number =>dispatch(createDecrementAcion(number)),
//     jiaAsync:(number,time)=>dispatch(createIncrementAsyncAcion(number,time))
//   }
// )
//使用connect()()创建并暴露一个组件
export default connect(
  state =>({count:state}),
  {
    jia:createIncrementAcion,
    jian:createDecrementAcion,
    jiaAsync:createIncrementAsyncAcion
  }
  )(Count)
