package com.library.repository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BookRepository {
    private static final Logger logger = LoggerFactory.getLogger(BookRepository.class);

    public void displayBooks() {
        logger.info("BookRepository: Displaying books...");
        System.out.println("Books retrieved from repository.");
    }
}
