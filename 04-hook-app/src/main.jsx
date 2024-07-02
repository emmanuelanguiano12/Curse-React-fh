import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithHustomHook } from './01-useState/CounterWithHustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
import { CallbackHooks } from './06-memos/CallbackHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHooks />
  </React.StrictMode>,
)
