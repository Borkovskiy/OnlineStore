package project.store.onlinestore.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

import java.util.Arrays;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;

    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        CustomUser customUser;
        try {
            customUser = userService.findByEmail(email);
        } catch (UserNotFoundException e) {

            throw new UsernameNotFoundException("user not found");
        }
        List<GrantedAuthority> roles = Arrays.asList(new SimpleGrantedAuthority(customUser.getRole().toString()));

        return new User(customUser.getEmail(), customUser.getPassword(), roles);
    }
}
