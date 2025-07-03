package com.example;

public class MyService {
    private ExternalApi api;

    // ✅ Constructor that accepts ExternalApi
    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
