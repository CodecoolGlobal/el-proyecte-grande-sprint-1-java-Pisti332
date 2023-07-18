package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.sevice.daos.UserDAOTestImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
public class UserController {
    private UserDAOTestImpl userDAOTestImpl;

    @Autowired
    public UserController(UserDAOTestImpl userDAOTestImpl) {
        this.userDAOTestImpl = userDAOTestImpl;
    }

    @GetMapping("user")
    public UserDTO getUserById(@RequestParam String id) {
        return userDAOTestImpl.getUserById(id);
    }
    @PostMapping("signup")
    public void signUp(@RequestBody NewUserDTO newUserDTO) {
        userDAOTestImpl.postUser(newUserDTO);
    }
    @PutMapping("user")
    public void updateUserById(@RequestParam String id, @RequestBody UpdateUserDTO updateUserDTO) {
        userDAOTestImpl.updateUserById(id, updateUserDTO);
    }
    @DeleteMapping("user")
    public void deleteUserById(@RequestParam String id) {
        userDAOTestImpl.deleteUserById(id);
    }
}
