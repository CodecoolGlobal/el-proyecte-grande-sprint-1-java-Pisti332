package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/images")
public class ImageController {
    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping
    public List<Image> getAllImages() {
        return imageService.getAllImageNames();
    }
    @PostMapping
    public void uploadImage(@RequestBody NewImageDTO newImageDTO) throws IOException {
//        imageService.uploadImage(newImageDTO);
    }
}
