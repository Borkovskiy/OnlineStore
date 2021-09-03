package project.store.onlinestore.services;

import project.store.onlinestore.dto.OrderForUserDTO;
import project.store.onlinestore.dto.OrderFromUserDTO;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.exception.ProductNotFoundException;
import project.store.onlinestore.exception.UserNotFoundException;

import java.security.Principal;
import java.util.List;

public interface OrderService {
    UserInfoDTO getUserInfo(Principal principal) throws NullPointerException, UserNotFoundException;

    void addOrder(OrderFromUserDTO orderFromUserDTO, Principal principal) throws UserNotFoundException, ProductNotFoundException;

    List<OrderForUserDTO> getMyOrder(Principal principal) throws UserNotFoundException;
}
