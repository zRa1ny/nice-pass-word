# nice-pass-word
基于原生的password，支持无痕密码模式（无填充，无记录，不会触发浏览器记住密码操作）
## 安装
```
 npm i nice-pass-word
```
## 使用
`html`
```
    <input type="text" id="demo">
```
`JavaScript`
```
    // new NicePassWord(selector,opts)
    let input = new NicePassWord('#demo')  
    // input.value
```
`default options`
```
    opts = {
        type = 'password', // text
        symbol = '*', 
        callback = () => {}, // input cb
        pattern = /([\u4e00-\u9fa5])/g // filter pattern
    }
```
`methods`
|  名称   | 参数  | 介绍 |
|  ----  | ----  |  ----  |
| $changeType  | string | 修改显示类型（即是否隐藏真实内容） | 
| $setValue  | string | 设置密码框的值 |

