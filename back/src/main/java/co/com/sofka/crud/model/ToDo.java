package co.com.sofka.crud.model;

import javax.persistence.*;

@Entity
@Table(name = "todos")
public class ToDo {
    //ATTRIBUTES
    @Id //hace referencia a un identificador
    @GeneratedValue(strategy = GenerationType.AUTO) //Autogenerado
    private Long id;

    private String name;
    private boolean completed;

    @ManyToOne (fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "todolist_id")
    private ToDoList todolist;

    //CONSTRUCTOR
    public ToDo() {
    }

    public ToDo(String name, boolean completed) {
        this.name = name;
        this.completed = completed;
    }

    public ToDo(String name, boolean completed, ToDoList todolist) {
        this.name = name;
        this.completed = completed;
        this.todolist = todolist;
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
