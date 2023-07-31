package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserLoginDTO;
import com.codecool.photobox_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
public class UserController {
    private UserRepository userDAOTestImpl;

    @Autowired
    public UserController(UserRepository userDAOTestImpl) {
        this.userDAOTestImpl = userDAOTestImpl;
    }

    @GetMapping("user/{id}")
    public UserDTO getUserById(@PathVariable String id) {
        return userDAOTestImpl.getUserById(id);
    }
    @PostMapping("signup")
    public void signUp(@RequestBody NewUserDTO newUserDTO) {
        userDAOTestImpl.postUser(newUserDTO);
    }
    @PostMapping("signin")
    public boolean signIn(@RequestBody UserLoginDTO userLoginDTO) {
        return userDAOTestImpl.checkIfUserExists(userLoginDTO);
    }
    @PutMapping("user/{id}")
    public void updateUserById(@PathVariable String id, @RequestBody UpdateUserDTO updateUserDTO) {
        userDAOTestImpl.updateUserById(id, updateUserDTO);
    }
    @DeleteMapping("user/{id}")
    public void deleteUserById(@PathVariable String id) {
        userDAOTestImpl.deleteUserById(id);
    }
}
