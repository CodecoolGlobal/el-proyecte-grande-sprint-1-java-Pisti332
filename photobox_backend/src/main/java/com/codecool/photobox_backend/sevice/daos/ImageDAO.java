package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface ImageDAO {
    String IMAGES_FOLDER_PATH = "E:\\Programming Projects\\el-proyecte-grande-sprint-1-java-Pisti332\\photobox_backend\\src\\main\\java\\com\\codecool\\photobox_backend\\repository\\images";
    ImageNamesDTO getAllImageNames();
    void uploadImage(NewImageDTO newImageDTO) throws IOException;


}
