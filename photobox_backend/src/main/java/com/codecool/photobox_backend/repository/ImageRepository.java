package com.codecool.photobox_backend.repository;

import com.codecool.photobox_backend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ImageRepository extends JpaRepository<Image, UUID> {
    String IMAGES_FOLDER_PATH = System.getenv("IMAGES_FOLDER_PATH");


}
