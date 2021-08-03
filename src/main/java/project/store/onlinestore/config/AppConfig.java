package project.store.onlinestore.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

private final TestHelper testHelper;

    public AppConfig(TestHelper testHelper) {
        this.testHelper = testHelper;
    }

    @Bean
    public CommandLineRunner commandLineRunner() {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                testHelper.init();
            }
        };
    }
    }




