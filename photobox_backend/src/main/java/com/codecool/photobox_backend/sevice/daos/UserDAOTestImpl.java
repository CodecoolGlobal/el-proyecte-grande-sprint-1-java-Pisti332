package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserLoginDTO;
import com.codecool.photobox_backend.sevice.daos.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDAOTestImpl implements UserDAO {
    private final List<User> users;

    public UserDAOTestImpl() {
        this.users = new ArrayList<>();
    }

    @Override
    public void postUser(NewUserDTO newUserDTO) {
        if (!checkIfUserExists(new UserLoginDTO(newUserDTO.username(), newUserDTO.password()))) {
            this.users.add(new User(newUserDTO.username(), newUserDTO.password(), newUserDTO.email()));
        }
    }

    @Override
    public UserDTO getUserById(String id) {
        List<User> filteredUsers = this.users.stream()
                .filter(user -> user.UUIDMatch(id)).toList();
        User selectedUser = filteredUsers.get(0);
        return selectedUser.toUserDTO();
    }

    @Override
    public void updateUserById(String id, UpdateUserDTO updateUserDTO) {
        List<User> filteredUsers = this.users.stream()
                .filter(user -> user.UUIDMatch(id)).toList();
        User selectedUser = filteredUsers.get(0);
        selectedUser.updateUser(updateUserDTO);

    }

    @Override
    public void deleteUserById(String id) {
        List<User> filteredUsers = this.users.stream()
                .filter(user -> user.UUIDMatch(id)).toList();
        this.users.remove(filteredUsers.get(0));
    }

    @Override
    public boolean checkIfUserExists(UserLoginDTO userLoginDTO) {
        List<User> matchingUsers = this.users.stream()
                .filter(user -> user.isUsername(userLoginDTO.username()))
                .filter(user -> user.isPassword(userLoginDTO.password()))
                .toList();
        return matchingUsers.size() > 0;
    }
}
