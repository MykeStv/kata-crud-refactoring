package co.com.sofka.crud.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")*/
@Entity
@Table(name = "todolist")
public class ToDoList {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "todolist", orphanRemoval = true, cascade = CascadeType.ALL)
    @JsonIgnore
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
