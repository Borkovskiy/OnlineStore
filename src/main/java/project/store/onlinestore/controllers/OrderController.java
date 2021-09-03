package project.store.onlinestore.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.OrderForUserDTO;
import project.store.onlinestore.dto.OrderFromUserDTO;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.dto.result.SuccessResult;
import project.store.onlinestore.exception.ProductNotFoundException;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.services.OrderService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("address")
    public UserInfoDTO getUserInformation(Principal principal) throws UserNotFoundException, NullPointerException {
        return orderService.getUserInfo(principal);
    }

    @GetMapping("my_orders")
    public List<OrderForUserDTO> getMyOrder(Principal principal) throws UserNotFoundException {
        return orderService.getMyOrder(principal);
    }

    @PostMapping("order")
    public ResponseEntity<ResultDTO> newOrder(@RequestBody OrderFromUserDTO orderFromUserDTO, Principal principal) throws UserNotFoundException, ProductNotFoundException {
        orderService.addOrder(orderFromUserDTO, principal);
        return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);
    }


    @ExceptionHandler({NullPointerException.class, UserNotFoundException.class})
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult("user not authorized"), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ResultDTO> badRequest() {
        return new ResponseEntity<>(new BadRequestResult("product not found"), HttpStatus.BAD_REQUEST);
    }

}
