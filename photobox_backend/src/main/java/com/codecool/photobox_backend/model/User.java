package com.codecool.photobox_backend.model;

import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;

import java.time.LocalDate;
import java.util.UUID;

public class User {
    private String username;
    private String password;
    private String email;
    private UUID uuid;
    private final LocalDate registryDate;
    private LocalDate lastUpdated;

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.uuid = UUID.randomUUID();
        LocalDate currentDate = LocalDate.now();
        this.registryDate = currentDate;
        this.lastUpdated = currentDate;
    }
    public boolean UUIDMatch(String id) {
        return uuid.toString().equals(id);
    }
    public UserDTO toUserDTO() {
        return new UserDTO(this.username, this.email, this.password);
    }
    public void updateUser(UpdateUserDTO updateUserDTO) {
        this.username = updateUserDTO.name();
        this.password = updateUserDTO.password();
        this.email = updateUserDTO.email();
        this.lastUpdated = LocalDate.now();
    }

    public boolean isUsername(String username) {
        return this.username.equals(username);
    }

    public boolean isPassword(String password) {
        return this.password.equals(password);
    }
}
