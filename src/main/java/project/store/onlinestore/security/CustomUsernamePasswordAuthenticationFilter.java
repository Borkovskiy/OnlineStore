package project.store.onlinestore.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

public class CustomUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            String json  = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
            ObjectMapper objectMapper= new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(json);
            String email= jsonNode.get("email").asText();
            String password= jsonNode.get("password").asText();
            return new UsernamePasswordAuthenticationToken(email, password);
        } catch (IOException e) {
            e.printStackTrace();
            throw new InternalAuthenticationServiceException("Failed to parse authentication request body");
        }
    }
}
