package co.com.sofka.crud.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "todolist")
public class ToDoList {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "todolist", orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ToDo> todos = new HashSet<>();

    //CONSTRUCTOR
    public ToDoList() {
    }

    public ToDoList(String name, Set<ToDo> todo) {
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

    public Set<ToDo> getTodo() {
        return todos;
    }

    public void setTodo(Set<ToDo> todo) {
        this.todos = todo;
    }
}
