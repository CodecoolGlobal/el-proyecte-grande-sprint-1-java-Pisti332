package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.security.MyUserPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User registerUser(UserDTO userDTO) {
        User userToSave = new User();
        userToSave.setName(userDTO.username());
        userToSave.setEmail(userDTO.email());
        userToSave.setPassword(userDTO.password());
        userRepository.save(userToSave);
        return userToSave;
    }

    public User signInUser(UserDTO userDTO) {
        User user = userRepository.findByName(userDTO.username());
        if (user != null && Objects.equals(user.getPassword(), userDTO.password())) {
            return user;
        }
        return new User();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new MyUserPrincipal(user);
    }
}
