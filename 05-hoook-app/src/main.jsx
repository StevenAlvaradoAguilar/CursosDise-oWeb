import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-use-state/CounterApp';
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/focusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';;
// import './08-useReducer/intro-reducer;'
import { TodoApp } from './08-useReducer/todoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)

TodoApp