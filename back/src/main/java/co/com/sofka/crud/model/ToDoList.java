package co.com.sofka.crud.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "todolist")
public class ToDoList {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ToDo> todos = new ArrayList<ToDo>();

    //CONSTRUCTOR
    public ToDoList() {
    }

    public ToDoList(String name, List<ToDo> todo) {
        this.name = name;
        this.todos = todo;
    }

    //GETTER && SETTER
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ToDo> getTodo() {
        return todos;
    }

    public void setTodo(List<ToDo> todo) {
        this.todos = todo;
    }
}
