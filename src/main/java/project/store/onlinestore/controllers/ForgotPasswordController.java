package project.store.onlinestore.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.bytebuddy.utility.RandomString;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import project.store.onlinestore.dto.result.BadRequestResult;
import project.store.onlinestore.dto.result.ResultDTO;
import project.store.onlinestore.dto.result.SuccessResult;
import project.store.onlinestore.exception.UserNotFoundException;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

//todo: create a exception

@RestController
public class ForgotPasswordController {
   private final ObjectMapper objectMapper;
    private final JavaMailSender mailSender;
    private final UserService userService;

    public ForgotPasswordController(ObjectMapper objectMapper, JavaMailSender mailSender, UserService userService) {
        this.objectMapper = objectMapper;
        this.mailSender = mailSender;
        this.userService = userService;
    }

    @PostMapping("/forgot_password")
    public ResponseEntity<ResultDTO> processForgotPassword(@RequestBody String json
    ) throws MessagingException, UnsupportedEncodingException, JsonProcessingException, UserNotFoundException {

        JsonNode jsonNode = objectMapper.readTree(json);
        String email=jsonNode.get("forgotEmail").asText();

        String token = RandomString.make(30);


        userService.updateResetPasswordToken(token,email);

            String resetPasswordLink = "https://online-store-120.herokuapp.com" + "/reset_password?token=" + token;
            sendEmail(email,resetPasswordLink);




            return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);

    }

    public void sendEmail(String email, String link)throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("online-store-120.herokuapp.com", "online-store-120.herokuapp.com");
        helper.setTo(email);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<p><a href=\"" + link + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }




    @PostMapping("/new_password")
    public ResponseEntity<ResultDTO> processResetPassword(@RequestBody String json
           ) throws UserNotFoundException, JsonProcessingException {

        JsonNode jsonNode = objectMapper.readTree(json);
        String password=jsonNode.get("password").asText();
        String token=jsonNode.get("token").asText();
        System.out.println(token);
        System.out.println(password);
        CustomUser customUser=userService.getByResetPasswordToken(token);
        userService.updatePassword(customUser, password);
        return new ResponseEntity<>(new SuccessResult(), HttpStatus.OK);
    }
    @ExceptionHandler({HttpMessageNotReadableException.class,  JsonProcessingException.class})
    public ResponseEntity<ResultDTO> handleException() {
        return new ResponseEntity<>(new BadRequestResult("bad request"), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ResultDTO> userNotFoundException() {
        return new ResponseEntity<>(new BadRequestResult("User not found"), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler({MessagingException.class, UnsupportedEncodingException.class})
    public ResponseEntity<ResultDTO> emailSendFail() {
        return new ResponseEntity<>(new BadRequestResult("Error sending email"), HttpStatus.BAD_REQUEST);
    }

}
