package project.store.onlinestore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.store.onlinestore.model.CustomUser;

import java.util.Optional;


public interface CustomUserRepository extends JpaRepository<CustomUser, Long> {
    Optional<CustomUser> findByEmail(String email);

    Boolean existsByEmail(String email);

    Optional<CustomUser> findByResetPasswordToken(String token);
}
