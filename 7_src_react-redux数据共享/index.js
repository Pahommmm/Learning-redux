import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);
//检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染页面
// store.subscribe(()=>{
//     root.render(<App />);
//   })

