package com.codecool.photobox_backend.controller.dtos.user;

import org.springframework.stereotype.Repository;

public record UserDTO(String username, String email, String password) {

}
