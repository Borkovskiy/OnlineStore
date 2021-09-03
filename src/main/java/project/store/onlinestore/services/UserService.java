package project.store.onlinestore.services;

import project.store.onlinestore.enums.Provider;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;

import java.security.Principal;

public interface UserService {

    CustomUser findByEmail(String login) throws UserNotFoundException;

    boolean addUser(CustomUser user, Provider provider);

    void updateResetPasswordToken(String token, String email) throws UserNotFoundException;

    CustomUser getByResetPasswordToken(String token) throws UserNotFoundException;

    void updatePassword(CustomUser customUser, String newPassword);

    String getUserEmail(Principal principal) throws NullPointerException;
}

