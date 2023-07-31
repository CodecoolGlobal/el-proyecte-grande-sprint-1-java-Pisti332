package com.codecool.photobox_backend.repository;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import com.codecool.photobox_backend.service.FoldersFilesReader;
import com.codecool.photobox_backend.service.ImageConverter;
import com.codecool.photobox_backend.service.ImageWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@Service
public class ImageDAOTestImpl implements ImageDAO{
    private List<String> images;
    private ImageConverter imageConverter;
    private ImageWriter imageWriter;
    private FoldersFilesReader foldersFilesReader;
    private final String imagesFolderPath = IMAGES_FOLDER_PATH;
    @Autowired
    public ImageDAOTestImpl(FoldersFilesReader foldersFilesReader, ImageConverter imageConverter, ImageWriter imageWriter) {
        this.foldersFilesReader = foldersFilesReader;
        this.images = new ArrayList<>();
        this.imageConverter = imageConverter;
        this.imageWriter = imageWriter;
    }

    @Override
    public ImageNamesDTO getAllImageNames() {
        this.images = foldersFilesReader.readFileNames(imagesFolderPath);
        return new ImageNamesDTO(this.images);
    }

    @Override
    public void uploadImage(NewImageDTO newImageDTO) throws IOException {
        BufferedImage bufferedImage = imageConverter.convert(newImageDTO.imageData());
        imageWriter.saveImageAsFile(bufferedImage, newImageDTO.imageName(), imagesFolderPath, newImageDTO.format());
    }
}
