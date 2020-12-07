import React from 'react';
import { observer } from 'mobx-react';

const ToDo = observer(({ task }) => (
    <li className={"list-group-item d-flex align-tiems-center " + (task.completed ? 'bg-success' : 'Coucou')}>
        {task.name}
        <button className={"btn btn-sm ml-auto " + (task.completed ? 'bg-success' : 'btn-outline-success')} onClick={() => (task.completed = !task.completed)}>&#x2713;</button>
    </li>

));

export default ToDo