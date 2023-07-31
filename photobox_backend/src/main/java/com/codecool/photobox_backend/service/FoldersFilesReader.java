package com.codecool.photobox_backend.service;

import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class FoldersFilesReader {
    public List<String> readFileNames(String pathOfFolder) {
        List<String> fileNames = new ArrayList<>();
        File folder = new File(pathOfFolder);
        File[] listOfFiles = folder.listFiles();

        for (File listOfFile : listOfFiles) {
            if (listOfFile.isFile()) {
                fileNames.add(listOfFile.getName());
            }
        }
        return fileNames;
    }
}
