package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public List<Image> getAllImageNames() {
        return imageRepository.findAll();
    }
}
