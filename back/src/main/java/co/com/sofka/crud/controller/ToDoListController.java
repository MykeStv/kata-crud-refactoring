package co.com.sofka.crud.controller;

import co.com.sofka.crud.model.ToDo;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.model.ToDoModel;
import co.com.sofka.crud.service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/list")
public class ToDoListController {

    @Autowired
    private ToDoListService listService;

    @GetMapping
    public Iterable<ToDoList> getTodoList() {
        return this.listService.getList();
    }

    @PostMapping
    public ToDoList saveTodoList(ToDoList todoList) {
        return this.listService.saveList(todoList);
    }

    @PutMapping(path = "/{listid}")
    public ToDoList addTodo(@PathVariable("listid") Long listid,@RequestBody ToDo todo) {
        return this.listService.addTodo(listid, todo);
    }
}
