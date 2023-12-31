package com.codecool.photobox_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
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
    @GeneratedValue()
    private UUID id;
    private String name;
    @JsonIgnore
    @ManyToOne
    private User user;
    @OneToMany(mappedBy = "image")
    private Set<Comment> comments;
}
