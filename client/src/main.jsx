import React from 'react'
import ReactDOM from 'react-dom/client'
import { OpenaiImageGenerator } from './OpenaiImageGenerator'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OpenaiImageGenerator />
  </React.StrictMode>,
)
