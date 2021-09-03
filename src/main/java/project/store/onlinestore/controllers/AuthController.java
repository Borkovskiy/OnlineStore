package project.store.onlinestore.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.EmailDTO;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.dto.result.SuccessResult;
import project.store.onlinestore.enums.Provider;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

import java.security.Principal;
import java.util.Map;

@RestController
@CrossOrigin
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ResultDTO> addNewUser(@RequestBody CustomUser user) {
        if (!userService.addUser(user, Provider.LOCAL)) {
            return new ResponseEntity<>(new BadRequestResult("user already exist"), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);
    }

    @GetMapping("/user_info")
    public EmailDTO user(Principal principal) {
        if (principal.getClass().equals(OAuth2AuthenticationToken.class)) {
            Map<String, Object> attrs = ((OAuth2AuthenticationToken) principal).getPrincipal().getAttributes();
            String email = (String) attrs.get("email");
            return new EmailDTO(email);
        } else {
            return new EmailDTO(principal.getName());
        }
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult("user not authorized"), HttpStatus.UNAUTHORIZED);
    }

}
