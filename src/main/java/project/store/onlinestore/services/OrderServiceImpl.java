package project.store.onlinestore.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.store.onlinestore.dto.OrderForUserDTO;
import project.store.onlinestore.dto.OrderFromUserDTO;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.enums.OrderStatus;
import project.store.onlinestore.exception.ProductNotFoundException;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.*;
import project.store.onlinestore.repositories.OrderRepository;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class OrderServiceImpl implements OrderService {
    private final UserService userService;
    private final ProductService productService;
    private final OrderRepository orderRepository;

    public OrderServiceImpl(UserService userService, ProductService productService, OrderRepository orderRepository) {
        this.userService = userService;
        this.productService = productService;
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public UserInfoDTO getUserInfo(Principal principal) throws NullPointerException, UserNotFoundException {
        CustomUser customUser = userService.findByEmail(userService.getUserEmail(principal));
        return customUser.toUserInfoDTO();
    }

    @Override
    @Transactional
    public void addOrder(OrderFromUserDTO orderFromUserDTO, Principal principal) throws UserNotFoundException, ProductNotFoundException {
        String email = userService.getUserEmail(principal);
        CustomUser customUser = userService.findByEmail(email);
        UserOrder userOrder = createUserOrder(orderFromUserDTO, customUser);
        orderRepository.save(userOrder);
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderForUserDTO> getMyOrder(Principal principal) throws UserNotFoundException {
        String email = userService.getUserEmail(principal);
        CustomUser customUser = userService.findByEmail(email);
        List<UserOrder> userOrders = orderRepository.findUserOrderByCustomUser(customUser);
        List<OrderForUserDTO> result = new ArrayList<>();
        userOrders.forEach((x) -> result.add(x.toDTO()));
        return result;
    }

    private UserOrder createUserOrder(OrderFromUserDTO orderFromUserDTO, CustomUser customUser) throws ProductNotFoundException {
        customUser.setFirstName(orderFromUserDTO.getFirstName());
        customUser.setLastName(orderFromUserDTO.getLastName());
        Address address = new Address();
        if (customUser.getAddress() != null) {
            address = customUser.getAddress();
        }
        customUser.addAddress(address);
        address.setAddress(orderFromUserDTO.getAddress());
        address.setRegion(orderFromUserDTO.getRegion());
        address.setPostalCode(orderFromUserDTO.getPostalCode());
        address.setCity(orderFromUserDTO.getCity());
        address.setShippingCountry(orderFromUserDTO.getShippingCountry());
        UserOrder userOrder = new UserOrder(orderFromUserDTO.getEmail(), LocalDateTime.now(), customUser, address, OrderStatus.CREATE);
        address.addUserOrder(userOrder);
        customUser.addUserOrder(userOrder);
        Map<Long, Integer> ordersProduct = orderFromUserDTO.getProducts();
        for (Map.Entry<Long, Integer> entry : ordersProduct.entrySet()) {
            Long productsID = entry.getKey();
            Integer productsQuantity = entry.getValue();
            Product product = productService.getProduct(productsID);
            userOrder.getProducts().add(new OrderProduct(userOrder, product, product.getPrice(), productsQuantity));
        }
        return userOrder;
    }
}
