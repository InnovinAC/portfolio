import React from 'react'
import ReactDOM from 'react-dom/client'
import './../global.css'
import AllRoutes from "./routes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AllRoutes/>
  </React.StrictMode>,
)
