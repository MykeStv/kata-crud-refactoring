package co.com.sofka.crud.service;

import co.com.sofka.crud.model.ToDo;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.model.ToDoModel;
import co.com.sofka.crud.repository.ToDoListRepository;
import co.com.sofka.crud.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoListService {

    @Autowired
    private ToDoListRepository toDoListRepository;
    @Autowired
    private ToDoRepository todoRepository;

    //Metodo para obtener los datos
    public Iterable<ToDoList> getList() {
        return this.toDoListRepository.findAll();
    }

    //Metodo para guardar datos
    public ToDoList saveList(ToDoList todoList) {
        return this.toDoListRepository.save(todoList);
    }


    /*public ToDoList saveTodo(Long listid, ToDoModel todoM ) {
        var listTodo = this.toDoListRepository.findById(listid).orElseThrow();

        var todo = new ToDo();

        todo.setId(todoM.getId());
        todo.setName(todoM.getName());
        todo.setCompleted(todoM.isCompleted());

        //adicionar un nuevo to-do a la lista
        listTodo.getTodo().add(todo);

        return this.toDoListRepository.save(listTodo);

    }*/
    //Guardar todo en list
    public ToDoList addTodo(Long listid, ToDo todo ) {
        var listTodo = this.toDoListRepository.findById(listid).orElseThrow();

        //adicionar un nuevo to-do a la lista
        listTodo.getTodo().add(todo);

        return this.toDoListRepository.save(listTodo);

    }

    //Eliminar un todo de la lista
    public void deleteTodoById(Long id) {
        this.todoRepository.deleteById(id);
    }
}
