import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './router'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const rootElement: HTMLElement | null = document.getElementById('root')

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement,
)

serviceWorker.unregister()
