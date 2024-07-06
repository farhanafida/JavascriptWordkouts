import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      toDo: '',
      editMode: null,
      editText: '',
      selectedOption: 'all'
    };
    this.todoInputRef = React.createRef();
  }

  componentDidMount() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    document.title = `${date}/${month}/${year}`;
  }

  handleButton = () => {
    const { toDo, toDos } = this.state;
    if (toDo.trim() === "") {
      alert("Please enter a task before adding.");
      return;
    }
    const existingTodo = toDos.find(todo => todo.text === toDo.trim());
    if (existingTodo) {
      alert("This task already exists.");
      return;
    }
    this.setState({
      toDos: [...toDos, { id: Date.now(), text: toDo, status: false }],
      toDo: ''
    }, () => {
      this.todoInputRef.current.focus();
    });
  };

  handleEditButton = (id, text) => {
    this.setState({ editMode: id, editText: text });
  };

  handleSaveEdit = (id) => {
    this.setState(prevState => ({
      toDos: prevState.toDos.map(todo =>
        todo.id === id ? { ...todo, text: prevState.editText } : todo
      ),
      editMode: null,
      editText: ''
    }));
  };

  handleCheckboxChange = (id) => {
    this.setState(prevState => ({
      toDos: prevState.toDos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    }));
  };

  render() {
    const { toDos, toDo, editMode, editText, selectedOption } = this.state;
    const completedTask = toDos.filter(obj => obj.status);
    const taskToComplete = toDos.filter(obj => !obj.status);

    return (
      <div className="app">
        <div className="mainHeading">
          <h1>TODO LIST</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>It's a cheerful day!!!</h2>
        </div>
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => this.setState({ toDo: e.target.value })}
            type="text"
            placeholder=" Add A Task..."
            ref={this.todoInputRef}
          />
          <i onClick={this.handleButton} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={() => this.handleCheckboxChange(obj.id)}
                  checked={obj.status}
                  type="checkbox"
                />
                {editMode === obj.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => this.setState({ editText: e.target.value })}
                    style={{ width: '40rem' }}
                  />
                ) : (
                  <p>{obj.text}</p>
                )}
              </div>
              <div className="right">
                {editMode === obj.id ? (
                  <i onClick={() => this.handleSaveEdit(obj.id)} className="fas fa-save"></i>
                ) : (
                  <>
                    <i onClick={() => this.handleEditButton(obj.id, obj.text)} className="fa-solid fa-pen"></i>
                    <i onClick={() => this.setState({ toDos: toDos.filter(todo => todo.id !== obj.id) })} className="fas fa-times"></i>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="filter">
          <select value={selectedOption} onChange={(e) => this.setState({ selectedOption: e.target.value })}>
            <option value="all">All Tasks</option>
            <option value="completed">Completed Tasks</option>
            <option value="toComplete">Tasks to Complete</option>
          </select>
        </div>

        <div>
          {selectedOption === 'all' && (
            <div className='display'>
              {completedTask.length > 0 && (
                <>
                  <h1 align='center'>Completed Tasks</h1>
                  {completedTask.map((obj, index) => (
                    <div key={index}>
                      <ul>
                        <h2>{obj.text}</h2>
                      </ul>
                    </div>
                  ))}
                </>
              )}
              {taskToComplete.length > 0 && (
                <>
                  <h1 align='center'>Task to Complete</h1>
                  {taskToComplete.map((obj, index) => (
                    <div key={index}>
                      <ul>
                        <h2>{obj.text}</h2>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {selectedOption === 'completed' && (
            <div className='display'>
              {completedTask.length > 0 && (
                <>
                  <h1 align='center'>Completed Tasks</h1>
                  {completedTask.map((obj, index) => (
                    <div key={index}>
                      <ul>
                        <h2>{obj.text}</h2>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {selectedOption === 'toComplete' && (
            <div className='display'>
              {taskToComplete.length > 0 && (
                <>
                  <h1 align='center'>Task to Complete</h1>
                  {taskToComplete.map((obj, index) => (
                    <div key={index}>
                      <ul>
                        <h2>{obj.text}</h2>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
