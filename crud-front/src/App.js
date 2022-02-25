import React, { useState } from 'react';
import AddListForm from './components/AddListForm';
import ListGomponet from './components/ListGomponet';



function App() {

  const DATA = [
    { id: 1, name: 'Comer' },
    { id: 2, name: 'Dormir' },
    { id: 3, name: 'Estudiar' },
  ]

  //Estado de las listas
  const [lists, setLists] = useState(DATA)

  const addList = (list) => {
    list.id = lists[lists.length - 1].id + 1;

    setLists([
      ...lists,
      list
    ]);

  }


  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <AddListForm addList={addList} />
      <ListGomponet lists={lists} />
    </div>
  );
}

export default App;
