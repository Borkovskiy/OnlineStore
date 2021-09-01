package project.store.onlinestore.services;

import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.exception.UserNotFoundException;

import java.security.Principal;

public interface OrderService {
    UserInfoDTO getUserInfo(Principal principal) throws NullPointerException, UserNotFoundException;
}
