//引入count的UI组件
import CountUI from '../../components/Count'
import { 
  createIncrementAcion,
  createDecrementAcion,
  createIncrementAsyncAcion 
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//a函数的返回值作为状态传递给了UI组件,
const mapStateToProps = (state)=>{
  return {count:state}
}
const mapDispathToProps = (dispatch)=>{
  return {
    jia:(number)=>{dispatch(createIncrementAcion(number))},
    jian:(number)=>{dispatch(createDecrementAcion(number))},
    jiaAsync:(number,time)=>{dispatch(createIncrementAsyncAcion(number,time))}
  }
}
//使用connect()()创建并暴露一个组件
export default connect(mapStateToProps,mapDispathToProps)(CountUI)
