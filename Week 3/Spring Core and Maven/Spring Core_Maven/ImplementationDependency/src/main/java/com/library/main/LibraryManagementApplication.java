package com.library.main;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LibraryManagementApplication {

    private static final Logger logger = LoggerFactory.getLogger(LibraryManagementApplication.class);

    // ✅ Main method must match exactly
    public static void main(String[] args) {
        logger.info("Starting Library Management Application...");

        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.showBooks();

        logger.info("Library Management Application Finished.");
    }
}
