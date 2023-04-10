import { Component } from 'react'

import './app.less'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
    
  }
}

export default App
