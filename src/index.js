import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './css/ToDo.css';
import { Provider } from 'mobx-react';

import TaskListModel from './models/TaskListModel';

const store = new TaskListModel();
store.addTask('Ajouter items');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))