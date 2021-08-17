package project.store.onlinestore.controllers;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.ProductInfoDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.dto.result.SuccessResult;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Map;

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
    @GetMapping("/user")
    public String user(Principal principal){


        if(principal.getClass().equals(OAuth2AuthenticationToken.class)){
            Map<String, Object> attrs=((OAuth2AuthenticationToken) principal).getPrincipal().getAttributes();
            String email = (String) attrs.get("email");
            return email;
        }else {
            String email = principal.getName();


            return email;
        }
    }
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult(), HttpStatus.BAD_REQUEST);
    }

}
