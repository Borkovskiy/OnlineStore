package project.store.onlinestore.services;

import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;

import java.util.Optional;

public interface UserService {

   Optional<CustomUser> findByEmail(String login);
   boolean addUser(CustomUser user);
}
