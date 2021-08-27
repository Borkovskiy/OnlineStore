package project.store.onlinestore.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.OrderForAdminDTO;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.services.OrderService;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("address")
    public UserInfoDTO getUserInformation(Principal principal) throws UserNotFoundException,NullPointerException {

        System.out.println(orderService.getUserInfo(principal));
        return orderService.getUserInfo(principal);
    }

    @PostMapping("order")
    public OrderForAdminDTO getOrder(){

        Map<Long,Integer> products= new HashMap<>();
        products.put(1L,2);
        products.put(2L,5);
        products.put(5L,1);
        OrderForAdminDTO order= new OrderForAdminDTO(products,"Andryi","Borkovskiy","kiev...","kievsk...","email","Ukraine","0311","Kiev");




        return order;
    }

    @ExceptionHandler({NullPointerException.class, UserNotFoundException.class})
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult("user not authorized"), HttpStatus.UNAUTHORIZED);
    }

}
