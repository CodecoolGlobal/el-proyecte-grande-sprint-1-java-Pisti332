package com.codecool.photobox_backend.security;

import com.codecool.photobox_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class MyUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public MyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        com.codecool.photobox_backend.model.User userFromRepo = userRepository.findByName(username);
        if (userFromRepo == null) {
            throw new UsernameNotFoundException(username);
        }
        return User
                .builder()
                .password(userFromRepo.getPassword())
                .username(userFromRepo.getName())
                .build();
    }
}
