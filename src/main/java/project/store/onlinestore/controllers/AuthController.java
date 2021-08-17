package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.dto.result.SuccessResult;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

import java.util.List;

@RestController
@CrossOrigin
public class AuthController {


    private final UserService userService;


    public AuthController(UserService userService) {
        this.userService = userService;

    }

    @PostMapping("/signup")
    public ResponseEntity<ResultDTO> addNewUser(@RequestBody CustomUser user){
        System.out.println(user);
       if(! userService.addUser(user)){
           return  new ResponseEntity<>(new BadRequestResult(), HttpStatus.BAD_REQUEST);
       }

        return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);
    }

}
