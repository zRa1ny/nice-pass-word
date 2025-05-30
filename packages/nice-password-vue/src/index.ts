import { App } from 'vue'
import Password from './pass-word.vue'

Password.install = (app: App) => {
    app.component("nice-password", Password)
    // 指定模式
}
export {
    Password
}
export default Password