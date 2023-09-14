package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationRequest;
import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationResponse;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.security.JWTService;
import com.codecool.photobox_backend.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserController.class)
@AutoConfigureMockMvc(addFilters = false)
class UserControllerTest {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    UserService userService;
    @MockBean
    JWTService jwtService;
    UserDTO testUserDTO;
    AuthenticationResponse testAuthResponse;
    AuthenticationRequest testAuthRequest;
    ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setUp() {
        testUserDTO = new UserDTO("A", "B", "C");
        testAuthResponse = new AuthenticationResponse("T", 1L, "A");
        testAuthRequest = new AuthenticationRequest("A", "C");
    }

    @Test
    void testSignUpEndpointResponseOK() throws Exception {
        String json = objectMapper.writeValueAsString(testUserDTO);
        String expected = objectMapper.writeValueAsString(testAuthResponse);
        Mockito.when(userService.registerUser(testUserDTO))
                .thenReturn(testAuthResponse);
        Mockito.when(jwtService.generateToken(Mockito.any(UserDetails.class))).thenReturn("T");
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(expected));
    }

    @Test
    void testSignInEndpointResponseOK() throws Exception {
        String json = objectMapper.writeValueAsString(testUserDTO);
        String expected = objectMapper.writeValueAsString(testAuthResponse);
        Mockito.when(userService.signInUser(testAuthRequest))
                .thenReturn(testAuthResponse);
        Mockito.when(jwtService.generateToken(Mockito.any(UserDetails.class))).thenReturn("T");
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/signin")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(expected));
    }
}