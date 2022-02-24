package co.com.sofka.crud.service;

import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.repository.ToDoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoListService {

    @Autowired
    private ToDoListRepository toDoListRepository;

    //Metodo para obtener los datos
    public Iterable<ToDoList> getList() {
        return this.toDoListRepository.findAll();
    }

    //Metodo para guardar datos
    public ToDoList saveList(ToDoList todoList) {
        return this.toDoListRepository.save(todoList);
    }
}
