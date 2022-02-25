import React, { useState } from 'react';
import AddListForm from './components/AddListForm';
import ListGomponet from './components/ListGomponet';



function App() {

  const DATA = [
    { id: 1, name: 'Comer', todo:[{ id: 1, name: 'dinner', completed: true }] },
    { id: 2, name: 'Dormir', todo:[] },
    { id: 3, name: 'Estudiar', todo:[] },
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

  const deleteList = (listId) => {
    setLists( lists.filter( list => list.id !== listId) )
  }


  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <AddListForm addList={addList} />
      {
        lists.map(list => (

          <ListGomponet key={list.id} list={list} deleteList={deleteList} />

        ))
        
      }
      
    </div>
  );
}

export default App;
