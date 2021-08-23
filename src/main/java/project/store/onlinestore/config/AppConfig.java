package project.store.onlinestore.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import project.store.onlinestore.enums.UserRole;
import project.store.onlinestore.model.CustomUser;
import project.store.onlinestore.services.UserService;

@Configuration
public class AppConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
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


                testHelper.init();
            }
        };
    }
}




