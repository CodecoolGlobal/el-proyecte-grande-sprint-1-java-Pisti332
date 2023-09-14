package com.codecool.photobox_backend.service;

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

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    private UserService underTest;
    private User testUser1;
    private User testUser2;

    @Mock
    UserRepository userRepository;
    @Mock
    JWTService jwtService;
    @Mock
    AuthenticationManager authenticationManager;

    @BeforeEach
    void setUp() {
        underTest = new UserService(userRepository, jwtService, authenticationManager);
        testUser1 = new User(1L, "Jack", "Jack", "Jack");
    }

    @Test
    void getUserById() {
        Optional<User> expected = Optional.of(testUser1);
        when(userRepository.findById(1L)).thenReturn(Optional.of(testUser1));
        Optional<User> actual = underTest.getUserById(1L);

        assertEquals(expected, actual);
    }
}