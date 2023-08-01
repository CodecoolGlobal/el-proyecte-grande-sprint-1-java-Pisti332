package com.codecool.photobox_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(
        name = "image"
)
@Table(
        name = "images"
)
public class Image {
    @Id
    @JsonIgnore
    @GeneratedValue()
    private UUID id;
    private String name;
    @ManyToOne
    private User user;
//    private Set<Comment> comments;
}
