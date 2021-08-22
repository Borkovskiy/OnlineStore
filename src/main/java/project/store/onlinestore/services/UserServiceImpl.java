package project.store.onlinestore.services;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.repositories.CustomUserRepository;

import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{
    private final CustomUserRepository customUserRepository;
    private final PasswordEncoder passwordEncoder;
    public UserServiceImpl(CustomUserRepository customUserRepository, PasswordEncoder passwordEncoder) {
        this.customUserRepository = customUserRepository;
        this.passwordEncoder=passwordEncoder;
    }

    @Transactional
    public boolean addUser(CustomUser user) {
        if (customUserRepository.existsByEmail(user.getEmail()) ) {
            System.out.println("user exist");
            return false;
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(UserRole.ADMIN);
        customUserRepository.save(user);
        System.out.println(customUserRepository.findByEmail(user.getEmail()));
        return true;
    }
    // todo: change exception
    @Transactional(readOnly = true)
    @Override
    public CustomUser findByEmail(String login) throws UserNotFoundException {
        return customUserRepository.findByEmail(login).orElseThrow(()->
                new UserNotFoundException("User doesnt exist"));
    }
    @Transactional
    public void updateResetPasswordToken(String token, String email) throws  UserNotFoundException {
        CustomUser customUser= customUserRepository.findByEmail(email).orElseThrow(()->
                new UserNotFoundException("User doesnt exist"));

            customUser.setResetPasswordToken(token);
            customUserRepository.save(customUser);


    }
    @Transactional(readOnly = true)
    public CustomUser getByResetPasswordToken(String token) throws UserNotFoundException {
        return customUserRepository.findByResetPasswordToken(token).orElseThrow(()->
                new UserNotFoundException("User doesnt exist"));
    }
    @Transactional
    public void updatePassword(CustomUser customUser, String newPassword) {

        String encodedPassword = passwordEncoder.encode(newPassword);
        customUser.setPassword(encodedPassword);

        customUser.setResetPasswordToken(null);
        customUserRepository.save(customUser);
    }


}
