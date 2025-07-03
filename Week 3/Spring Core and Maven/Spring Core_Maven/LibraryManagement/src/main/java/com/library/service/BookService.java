package com.library.service;

import com.library.repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BookService {
    private static final Logger logger = LoggerFactory.getLogger(BookService.class);

    private BookRepository bookRepository;

    // Setter for Spring to inject dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBooks() {
        logger.info("BookService: Invoking showBooks()");
        bookRepository.displayBooks();
    }
}
