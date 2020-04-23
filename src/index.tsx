import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './router'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const rootElement: HTMLElement | null = document.getElementById('root')

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools)
const System = React.createContext({
  test: false,
})

ReactDOM.render(
  <Provider store={store}>
    <System.Provider value={{ test: false }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </System.Provider>
  </Provider>,
  rootElement,
)

serviceWorker.unregister()
