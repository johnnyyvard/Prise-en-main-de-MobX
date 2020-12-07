import React from 'react';
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddTask from './AddTask';
import Devtools from 'mobx-react-devtools';

class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <Devtools />
                <BrowserRouter>
                    <>
                        <Switch>
                            <Route path="/add-task" component={AddTask} />
                            <Route path="/:filter?" component={ToDoList} />
                        </Switch>
                        <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                    </>
                </BrowserRouter>
            </section>
        )
    }
}

export default App