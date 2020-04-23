import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './router'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { SystemProvider, SystemConsumer } from './contexts'

const rootElement: HTMLElement | null = document.getElementById('root')

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <SystemProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SystemProvider>
  </Provider>,
  rootElement,
)

serviceWorker.unregister()
