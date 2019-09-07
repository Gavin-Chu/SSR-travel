// 用户管理
export const state =()=> {
  return{
    userInfo:{
      token:'',
      user:{}
    }
  }
 
}
export const mutations = {
  // 第一个参数固定是state，data在调用方法的时候用到
  setUserInfo(state,data){
    // 后台返回的用户信息
    state.userInfo = data
  },

  // 清空userInfo
  clearUserInfo(state){
    state.userInfo={
      token:'',
      user:{}
    }
  }
}
export const actions ={}