package co.com.sofka.crud.service;

import co.com.sofka.crud.model.ToDo;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.model.ToDoModel;
import co.com.sofka.crud.repository.ToDoListRepository;
import co.com.sofka.crud.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

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

    //Metodo para obtener la lista por id
    public Optional<ToDoList> getListById(Long id) {
        return this.toDoListRepository.findById(id);
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


        todo.setTodolist(listTodo);

        //adicionar un nuevo to-do a la lista
        listTodo.getTodo().add(todo);

        return this.toDoListRepository.save(listTodo);

    }

    //Actualizar lista
    public ToDoList updateList(ToDoList todoList) {
        var list = this.toDoListRepository.findById(todoList.getId()).orElseThrow();

        list.setName(todoList.getName());

        return this.toDoListRepository.save(list);
    }

    //Actualizar to-do
    public ToDoList updateTodo(Long listid, ToDo todo) {
        var listTodo = this.toDoListRepository.findById(listid).orElseThrow();

        //No funcionó por mala implementacion del metodo stream
        /*var newList = (ToDoList) listTodo.getTodo().stream().map(item -> {
                if(item.getId().equals(todo.getId())){
                    item.setName(todo.getName());
                    item.setCompleted(todo.isCompleted());
                }
            return item;
        });*/

        // Se recorre la lista de to-do para realizar el update
        for (var item : listTodo.getTodo()) {
            if(item.getId().equals(todo.getId())) {
                item.setName(todo.getName());
                item.setCompleted(todo.isCompleted());
            }
        }

        return this.toDoListRepository.save(listTodo);

    }


    //Eliminar lista
    public void deleteList(Long id) {
        this.toDoListRepository.deleteById(id);
    }

    //Eliminar un todo de la lista
    public void deleteTodoById(Long id) {
        var todo = this.todoRepository.findById(id).orElseThrow();
        this.todoRepository.delete(todo);
    }
}
