import React, { useEffect, useState } from 'react';
import AddListForm from './components/AddListForm';
import ListGomponet from './components/ListGomponet';



function App() {

  /* const DATA = [
    { id: 1, name: 'Comer', todo:[{ id: 1, name: 'dinner', completed: true }] },
    { id: 2, name: 'Dormir', todo:[] },
    { id: 3, name: 'Estudiar', todo:[] },
  ] */

  //Estado de las listas
  const [lists, setLists] = useState([])

  const url = 'http://localhost:8080/list';
  useEffect(() => {
    
    const getData = async () => {
      //Trae la data
      const DATA = await fetch(url)
        .then(res => res.json());
      console.log( DATA);
      setLists(DATA)
    }
    
    getData()

  }, [])
  

  const addList = (list) => {
    // list.id = lists[lists.length - 1].id + 1;

    const req = {
      id: null,
      name: list.name,
      todo: []
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req),
      
    }).then(
      res => res.json()
    )

    

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
