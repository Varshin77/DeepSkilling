package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;


public class MainApp {
    public static void main(String[] args) {
        // Load Spring Configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get Bean from Container
        BookService service = (BookService) context.getBean("bookService");

        // Use Service
        service.listBooks();
    }
}
