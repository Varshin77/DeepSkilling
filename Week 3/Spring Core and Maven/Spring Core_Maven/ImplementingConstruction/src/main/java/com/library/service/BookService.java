package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    private String serviceName;

    // Constructor Injection
    public BookService(String serviceName) {
        this.serviceName = serviceName;
        System.out.println("Constructor injection: serviceName = " + serviceName);
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter injection: BookRepository injected");
    }

    public void listBooks() {
        System.out.println("Service Name: " + serviceName);
        bookRepository.display();
    }
}
