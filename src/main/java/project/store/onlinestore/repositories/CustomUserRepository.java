package project.store.onlinestore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.store.onlinestore.model.CustomUser;


public interface CustomUserRepository extends JpaRepository<CustomUser, Long> {
}
