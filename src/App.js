import React from 'react';
import Task from './component/Task'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Task></Task>
      </div>
    </Provider>
  )
}

export default App;