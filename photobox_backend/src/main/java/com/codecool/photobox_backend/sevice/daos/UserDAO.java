package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserLoginDTO;

public interface UserDAO {
    void postUser(NewUserDTO newUserDTO);
    UserDTO getUserById(String id);
    void updateUserById(String id, UpdateUserDTO updateUserDTO);
    void deleteUserById(String id);
    boolean checkIfUserExists(UserLoginDTO userLoginDTO);


}
