package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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


    @GetMapping("user/{id}")
    public User getUserById(@PathVariable Long id) {
        Optional<User> userOptional = userService.getUserById(id);
        return userOptional.orElse(null);
    }

    @PostMapping("signup")
    public void signUp(@RequestBody UserDTO UserDTO) {
        userService.registerUser(UserDTO);
    }

    @PostMapping("signin")
    public boolean signIn(@RequestBody UserDTO userDTO) {
        return userService.signInUser(userDTO);
    }

    @PutMapping("user/{id}")
    public void updateUserById(@PathVariable String id, @RequestBody UserDTO userDTO) {
        //todo
    }

    @DeleteMapping("user/{id}")
    public void deleteUserById(@PathVariable String id) {
        //todo
    }
}
