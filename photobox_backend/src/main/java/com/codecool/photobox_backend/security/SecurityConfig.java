package com.codecool.photobox_backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/api/auth/signup/**").permitAll()
                        .requestMatchers("/api/auth/signin/**").permitAll()
                        .requestMatchers("/api/images/**").permitAll()
                        .requestMatchers("/**").authenticated()
                );
        return http.build();
    }
    @Bean
    public PasswordEncoder Encoder() {
        return new BCryptPasswordEncoder(10);
    }
}
