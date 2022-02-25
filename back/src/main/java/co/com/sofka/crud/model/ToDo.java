package co.com.sofka.crud.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

/*@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")*/
@Entity
@Table(name = "todos")
public class ToDo {
    //ATTRIBUTES
    @Id //hace referencia a un identificador
    @GeneratedValue(strategy = GenerationType.AUTO) //Autogenerado
    private Long id;

    private String name;
    private boolean completed;

    //@JoinColumn(name = "todolist_id")
    @ManyToOne (fetch = FetchType.LAZY)
    @JsonIgnore
    private ToDoList todolist;

    //CONSTRUCTOR
    public ToDo() {
    }

    public ToDo(String name, boolean completed) {
        this.name = name;
        this.completed = completed;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public ToDoList getTodolist() {
        return todolist;
    }

    public void setTodolist(ToDoList todolist) {
        this.todolist = todolist;
    }
}
