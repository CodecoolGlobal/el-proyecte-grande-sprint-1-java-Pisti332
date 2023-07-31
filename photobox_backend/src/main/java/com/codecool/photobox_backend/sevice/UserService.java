package com.codecool.photobox_backend.sevice;

import com.codecool.photobox_backend.sevice.daos.ImageDAO;
import com.codecool.photobox_backend.sevice.daos.UserDAO;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
}
