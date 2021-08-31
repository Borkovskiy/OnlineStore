package project.store.onlinestore.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

@Configuration
public class AppConfig {



    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
    @Bean
    public CommandLineRunner commandLineRunner(final UserService userService,
                                               final PasswordEncoder encoder, final TestHelper testHelper) {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                CustomUser user= new CustomUser("admin@admin",("admin"),UserRole.ADMIN);
                CustomUser user1= new CustomUser("gordon12v@gmail.com",("admin"),UserRole.ADMIN);
                userService.addUser(user);
                userService.addUser(user1);
                userService.updateResetPasswordToken("bG3K512iwX7Fxo3ddzZeSYgi0xhHKF","gordon12v@gmail.com");


                testHelper.init();
            }
        };
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }
}




