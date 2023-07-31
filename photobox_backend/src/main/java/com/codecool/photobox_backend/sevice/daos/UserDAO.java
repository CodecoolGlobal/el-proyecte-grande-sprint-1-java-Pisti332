package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.user.NewUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserLoginDTO;
import com.codecool.photobox_backend.sevice.daos.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {


}
