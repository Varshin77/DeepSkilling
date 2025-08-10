package com.example.inventory_service.controller;

import com.example.inventory_service.model.Inventory;
import com.example.inventory_service.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/inventory")
public class InventoryController {
    @Autowired
    private InventoryRepository repository;

    @PostMapping
    public Inventory create(@RequestBody Inventory inventory) {
        return repository.save(inventory);
    }

    @GetMapping("/{productId}")
    public Inventory getByProductId(@PathVariable Long productId) {
        return repository.findByProductId(productId);
    }
}
