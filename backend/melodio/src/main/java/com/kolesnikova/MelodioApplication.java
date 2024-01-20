package com.kolesnikova;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@ComponentScan({"com.kolesnikova.rest"})
//@EntityScan("com.kolesnikova.data")
//@EnableJpaRepositories("com.kolesnikova.data.repo")
public class MelodioApplication {
    public static void main(String[] args) {
        SpringApplication.run(MelodioApplication.class, args);
    }
}
