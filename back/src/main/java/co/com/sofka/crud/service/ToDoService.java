package co.com.sofka.crud.service;

import co.com.sofka.crud.model.ToDo;
import co.com.sofka.crud.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {
    @Autowired
    private ToDoRepository todoRepository;

    public Iterable<ToDo> getTodos() {
        return this.todoRepository.findAll();
    }
    public ToDo saveTodo(ToDo todo) {
        return this.todoRepository.save(todo);
    }
}
