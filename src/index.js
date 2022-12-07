import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataLayer } from './context/DataLayer'
import reducer, { initialState } from './context/reducer'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
    <DataLayer initialState={initialState} reducer={reducer}>
        <App/>
    </DataLayer>
    
)

