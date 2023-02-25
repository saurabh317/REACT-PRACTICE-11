import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataContextProvider } from './assets/CONTEXT/contextData'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
)
