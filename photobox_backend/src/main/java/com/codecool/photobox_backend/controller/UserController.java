package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationRequest;
import com.codecool.photobox_backend.controller.dtos.auth.AuthenticationResponse;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("api/auth")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("signup")
    public ResponseEntity<AuthenticationResponse> signUp(@RequestBody UserDTO UserDTO) {
        return ResponseEntity.ok(userService.registerUser(UserDTO));
    }

    @PostMapping("signin")
    public ResponseEntity<AuthenticationResponse> signin(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(userService.signInUser(request));
    }
}
