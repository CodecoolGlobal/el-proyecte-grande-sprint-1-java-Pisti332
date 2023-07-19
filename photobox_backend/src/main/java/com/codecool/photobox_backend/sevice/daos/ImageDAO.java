package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface ImageDAO {
    String IMAGES_FOLDER_PATH = System.getenv("IMAGES_FOLDER_PATH");
    ImageNamesDTO getAllImageNames();
    void uploadImage(NewImageDTO newImageDTO) throws IOException;


}
