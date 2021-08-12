package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.ProductInfoDTO;
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
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/singup")
    public ResponseEntity<ResultDTO> addNewUser(@RequestBody CustomUser user){
        userService.addUser(user.getEmail(), passwordEncoder.encode(user.getPassword()), UserRole.ADMIN);
        return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);
    }
}
