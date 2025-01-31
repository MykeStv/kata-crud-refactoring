package co.com.sofka.crud.controller;

import co.com.sofka.crud.model.ToDo;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.model.ToDoModel;
import co.com.sofka.crud.service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/list")
@CrossOrigin(origins = "*")
public class ToDoListController {

    @Autowired
    private ToDoListService listService;

    @GetMapping
    public Iterable<ToDoList> getTodoList() {
        return this.listService.getList();
    }

    @GetMapping(path = "/{id}")
    public Optional<ToDoList> getListId(@PathVariable("id") Long id) {
        return this.listService.getListById(id);
    }

    @PostMapping
    public ToDoList saveTodoList(@RequestBody ToDoList todoList) {
        return this.listService.saveList(todoList);
    }

    @PostMapping(path = "/{listid}")
    public ToDoList addTodo(@PathVariable("listid") Long listid,@RequestBody ToDo todo) {
        return this.listService.addTodo(listid, todo);
    }

    //update list
    @PutMapping(path = "/update")
    public ToDoList updateList(@RequestBody ToDoList todoList) {
        return this.listService.updateList(todoList);
    }

    //update to-do
    @PutMapping(path = "/{listid}/todo-update")
    public ToDoList updateTodo(@PathVariable("listid") Long listid, @RequestBody ToDo todo) {
        return this.listService.updateTodo(listid, todo);
    }

    //Delete list
    @DeleteMapping(path = "/{id}")
    public void deleteList(@PathVariable("id") Long id){
        this.listService.deleteList(id);
    }

    //Delete todo
    @DeleteMapping(path = "/todo/{id}")
    public void deleteTodo(@PathVariable("id") Long id) {
        this.listService.deleteTodoById(id);
    }
}
