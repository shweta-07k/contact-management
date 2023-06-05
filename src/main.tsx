import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux"
import reduxStore from './api/store.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={reduxStore} >
      <App />
    </Provider>
  </React.StrictMode>,
)
