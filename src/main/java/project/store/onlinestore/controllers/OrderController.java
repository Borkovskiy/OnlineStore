package project.store.onlinestore.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.OrderFromUserDTO;
import project.store.onlinestore.dto.UserInfoDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.services.OrderService;

import java.security.Principal;

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

    @GetMapping ("order")
    public void getOrder(@RequestBody OrderFromUserDTO order) {


    }


    @ExceptionHandler({NullPointerException.class, UserNotFoundException.class})
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult("user not authorized"), HttpStatus.UNAUTHORIZED);
    }

}
