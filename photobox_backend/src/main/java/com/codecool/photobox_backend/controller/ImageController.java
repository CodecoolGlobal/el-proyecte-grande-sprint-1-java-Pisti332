package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import com.codecool.photobox_backend.repository.ImageDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RequestMapping("api/images")
public class ImageController {
    private ImageDAO imageDAO;

    @Autowired
    public ImageController(ImageDAO imageDAO) {
        this.imageDAO = imageDAO;
    }

    @GetMapping
    public ImageNamesDTO getAllImages() {
        return imageDAO.getAllImageNames();
    }
    @PostMapping
    public void uploadImage(@RequestBody NewImageDTO newImageDTO) throws IOException {
        imageDAO.uploadImage(newImageDTO);
    }
}
