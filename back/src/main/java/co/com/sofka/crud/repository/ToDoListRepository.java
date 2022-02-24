package co.com.sofka.crud.repository;

import co.com.sofka.crud.model.ToDoList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoListRepository extends CrudRepository<ToDoList, Long> {
}
