import store from './store'

console.log(process.env)
console.log(process.env.NOTES)
const microApps = [
  {
    name: 'home',
    entry: process.env.VUE_APP_HOME,
    activeRule: '/home'
  },
  {
    name: 'notes',
    entry: process.env.VUE_APP_NOTES,
    activeRule: '/notes'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
