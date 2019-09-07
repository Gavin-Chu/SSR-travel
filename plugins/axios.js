// 处理axios请求拦截
import { Message } from "element-ui";
export default ({$axios})=>{
  $axios.onError(res=>{
    // 结构错误信息与代码
    const {message,statusCode}= res.response.data
    if (statusCode === 400 ) {
        Message.error(message)
    }
  })
}