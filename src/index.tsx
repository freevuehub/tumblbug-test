import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './router'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const rootElement: HTMLElement | null = document.getElementById('root')
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement,
)

serviceWorker.unregister()
