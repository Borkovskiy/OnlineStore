package project.store.onlinestore.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.repositories.CustomUserRepository;

import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{
    private final CustomUserRepository customUserRepository;

    public UserServiceImpl(CustomUserRepository customUserRepository) {
        this.customUserRepository = customUserRepository;
    }

    @Transactional
    public boolean addUser(String email, String passHash, UserRole role) {
        if (customUserRepository.existsByEmail(email) ) {
            System.out.println("est");
            return false;
        }
        CustomUser user = new CustomUser(email, passHash, role);
        customUserRepository.save(user);

        return true;
    }
    @Transactional(readOnly = true)
    @Override
    public Optional<CustomUser> findByEmail(String login) {
        return customUserRepository.findByEmail(login);
    }
}
