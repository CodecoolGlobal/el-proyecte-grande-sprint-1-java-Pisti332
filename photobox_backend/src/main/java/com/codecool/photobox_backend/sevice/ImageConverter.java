package com.codecool.photobox_backend.sevice;

import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
@Service
public class ImageConverter {
    public BufferedImage convert(String imageData) throws IOException {
        byte[] decodedBytes = Base64.getDecoder().decode(imageData);

        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(decodedBytes);
        BufferedImage bImage = ImageIO.read(byteArrayInputStream);
        return bImage;
    }
}
