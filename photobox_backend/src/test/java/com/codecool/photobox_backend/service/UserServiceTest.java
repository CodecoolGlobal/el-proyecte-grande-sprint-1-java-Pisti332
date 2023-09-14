package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationRequest;
import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationResponse;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.security.JWTService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    private UserService underTest;
    private User testUser;
    private UserDTO testUserDTO;
    private AuthenticationResponse testAuthResponse;
    private AuthenticationRequest testAuthRequest;

    @Mock
    UserRepository userRepository;
    @Mock
    JWTService jwtService;
    @Mock
    AuthenticationManager authenticationManager;
    @Mock
    PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        underTest = new UserService(userRepository, passwordEncoder, jwtService, authenticationManager);
        testUser = new User(1L, "Jack", "Jack", "Jack");
        testUserDTO = new UserDTO(testUser.getName(), testUser.getEmail(), testUser.getPassword());
        testAuthResponse = AuthenticationResponse.builder()
                .userId(testUser.getId())
                .token("Token")
                .username(testUser.getName())
                .build();
        testAuthRequest = AuthenticationRequest.builder()
                .username(testUser.getName())
                .password(testUser.getPassword())
                .build();
    }

    @Test
    void GetUserById_works() {
        Optional<User> expected = Optional.of(testUser);
        when(userRepository.findById(1L)).thenReturn(Optional.of(testUser));
        Optional<User> actual = underTest.getUserById(1L);

        assertEquals(expected, actual);
    }

    @Test
    void RegisterUserMethod_works() {
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .builder()
                .password(testUser.getPassword())
                .username(testUser.getName())
                .build();
        when(passwordEncoder.encode("Jack")).thenReturn("Jack");
        when(jwtService.generateToken(userDetails)).thenReturn("Token");
        when(userRepository.save(any(User.class))).thenReturn(testUser);
        AuthenticationResponse expected = testAuthResponse;
        AuthenticationResponse actual = underTest.registerUser(testUserDTO);
        assertEquals(actual.getUserId(), expected.getUserId());
        assertEquals(actual.getUsername(), expected.getUsername());
        assertEquals(actual.getToken(), expected.getToken());
    }

    @Test
    void SingInUserMethod_works() {
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .builder()
                .password(testUser.getPassword())
                .username(testUser.getName())
                .build();
        when(jwtService.generateToken(userDetails)).thenReturn("Token");
        when(userRepository.findByName(testUser.getName())).thenReturn(testUser);
        AuthenticationResponse expected = testAuthResponse;
        AuthenticationResponse actual = underTest.signInUser(testAuthRequest);
        assertEquals(actual.getUserId(), expected.getUserId());
        assertEquals(actual.getUsername(), expected.getUsername());
        assertEquals(actual.getToken(), expected.getToken());
    }
}