package project.store.onlinestore.services;

import org.springframework.stereotype.Service;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;

import java.security.Principal;
@Service
public class OrderServiceImpl implements OrderService {
    private final UserService userService;

    public OrderServiceImpl(UserService userService) {
        this.userService = userService;
    }

    public UserInfoDTO getUserInfo(Principal principal) throws NullPointerException, UserNotFoundException {
        CustomUser customUser=userService.findByEmail(userService.getUserEmail(principal));
        System.out.println("111111111111");
        System.out.println(customUser);
        System.out.println(customUser.toUserInfoDTO());
        return customUser.toUserInfoDTO();
    }
}
