package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationRequest;
import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationResponse;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.security.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UserService(UserRepository userRepository, JWTService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public AuthenticationResponse registerUser(UserDTO userDTO) {
        User userToSave = new User();
        userToSave.setName(userDTO.username());
        userToSave.setEmail(userDTO.email());
        userToSave.setPassword(passwordEncoder.encode(userDTO.password()));
        User user = userRepository.save(userToSave);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDTO.username(), userDTO.password())
        );
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .builder()
                .password(user.getPassword())
                .username(user.getName())
                .build();
        String token = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder().token(token).userId(user.getId()).username(user.getName()).build();
    }

    public AuthenticationResponse signInUser(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        User user = userRepository.findByName(request.getUsername());
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .builder()
                .password(user.getPassword())
                .username(user.getName())
                .build();
        String token = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder().token(token).userId(user.getId()).username(user.getName()).build();
    }
}
