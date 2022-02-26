import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { set } from 'react-hook-form';
import AddListForm from './components/AddListForm';
import ListGomponet from './components/ListGomponet';

const initialState = [];
// Creamos un contexto, de momento sin default values
const ListContext = createContext();

const reducer = (state, action) => {

  switch (action.type) {
    case 'add-list':
      const newList = state
      return 
  
    default:
      break;
  }

}

const ListProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {state, dispatch};

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
};



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
      
    }).then(res => res.json())
    .then(newList => setLists([...lists, newList]))
    /* .then( (list) => {
      dispatch({type: 'add-list'})
    }) */
    
    
  }

  const deleteList = (listId) => {
    setLists( lists.filter( list => list.id !== listId) )

    fetch(url +'/'+ listId, {
      method: 'DELETE'
    }).then(()=> {
      setLists( lists.filter( list => list.id !== listId) )
    })
    
  }


  return (
    <ListProvider>
      
      <div className="App">
        <h1>TO-DO LIST</h1>
        <AddListForm addList={addList} />
        {
          lists.map(list => (

            <ListGomponet key={list.id} list={list} deleteList={deleteList} />

          ))
          
        }
        
      </div>

    </ListProvider>
  );
}

export default App;
