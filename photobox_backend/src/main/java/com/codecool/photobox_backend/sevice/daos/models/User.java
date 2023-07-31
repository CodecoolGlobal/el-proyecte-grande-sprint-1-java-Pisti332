package com.codecool.photobox_backend.sevice.daos.models;

import com.codecool.photobox_backend.controller.dtos.user.UpdateUserDTO;
import com.codecool.photobox_backend.controller.dtos.user.UserDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;
    private String name;
    private String password;
    private String email;
    //todo set of images

}
