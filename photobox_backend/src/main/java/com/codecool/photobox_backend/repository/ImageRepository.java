package com.codecool.photobox_backend.repository;

import com.codecool.photobox_backend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import java.util.UUID;

@Repository
public interface ImageRepository extends JpaRepository<Image, UUID> {
    String IMAGES_FOLDER_PATH = System.getenv("IMAGES_FOLDER_PATH");
    @Query(
            nativeQuery = true,
            value = "select * from images limit ?1"
    )
    List<Image> getImagesWithLimit(int limit);


}
