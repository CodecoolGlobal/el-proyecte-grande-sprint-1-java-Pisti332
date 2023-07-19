package com.codecool.photobox_backend.sevice.daos;

import com.codecool.photobox_backend.controller.dtos.image.ImageNamesDTO;
import com.codecool.photobox_backend.controller.dtos.image.NewImageDTO;
import com.codecool.photobox_backend.sevice.FoldersFilesReader;
import com.codecool.photobox_backend.sevice.ImageConverter;
import com.codecool.photobox_backend.sevice.ImageWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
@Service
public class ImageDAOTestImpl implements ImageDAO{
    private List<String> images;
    private ImageConverter imageConverter;
    private ImageWriter imageWriter;
    private FoldersFilesReader foldersFilesReader;
    private final String imagesFolderPath = ImageDAO.IMAGES_FOLDER_PATH;
    @Autowired
    public ImageDAOTestImpl(FoldersFilesReader foldersFilesReader, ImageConverter imageConverter, ImageWriter imageWriter) {
        this.foldersFilesReader = foldersFilesReader;
        this.images = this.foldersFilesReader.readFileNames(imagesFolderPath);
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
