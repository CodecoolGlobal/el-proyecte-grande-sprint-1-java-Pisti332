package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserLoginDTO;
import com.codecool.photobox_backend.sevice.UserService;
import com.codecool.photobox_backend.sevice.daos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("user/{id}")
    public UserDTO getUserById(@PathVariable String id) {
        //todo
        return null;
    }

    @PostMapping("signup")
    public void signUp(@RequestBody NewUserDTO newUserDTO) {
        //todo
    }

    @PostMapping("signin")
    public boolean signIn(@RequestBody UserLoginDTO userLoginDTO) {
        //todo
        return false;
    }

    @PutMapping("user/{id}")
    public void updateUserById(@PathVariable String id, @RequestBody UpdateUserDTO updateUserDTO) {
        //todo
    }

    @DeleteMapping("user/{id}")
    public void deleteUserById(@PathVariable String id) {
        //todo
    }
}
