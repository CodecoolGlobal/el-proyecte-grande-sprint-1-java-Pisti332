package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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

    @BeforeEach
    void setUp() {
        //underTest = new UserService(userRepository);
        testUser1 = new User(1L, "Jack", "Jack", "Jack");
        testUser2 = new User(2L, "Bob", "Bob", "Bob");
    }

    @Test
    void getUserById() {
        Optional<User> expected = Optional.of(testUser1);
        when(userRepository.findById(1L)).thenReturn(Optional.of(testUser1));
        Optional<User> actual = underTest.getUserById(1L);

        assertEquals(expected, actual);
    }

    @Test
    void registerUser() {
        User expected = testUser2;
        User actual = underTest.registerUser(new UserDTO("Bob", "Bob", "Bob"));

        verify(userRepository, times(1)).save(any(User.class));
        assertEquals(expected.getPassword(), actual.getPassword());
        assertEquals(expected.getName(), actual.getName());
        assertEquals(expected.getEmail(), actual.getEmail());
    }

//    @Test
//    void signInUser() {
//        User expected = testUser1;
//        when(userRepository.findByName("Jack")).thenReturn(testUser1);
//
//        User actual = underTest.signInUser(new UserDTO("Jack", "Jack", "Jack"));
//
//        assertEquals(expected, actual);
//    }
}