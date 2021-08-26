package project.store.onlinestore.services;

import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;

import java.util.Optional;

public interface UserService {

   CustomUser findByEmail(String login) throws UserNotFoundException;
   boolean addUser(CustomUser user);
   void updateResetPasswordToken(String token, String email) throws UserNotFoundException;
   CustomUser getByResetPasswordToken(String token) throws UserNotFoundException;
   void updatePassword(CustomUser customUser, String newPassword);
}
