package com.example.order_service.controller;

import com.example.order_service.client.UserClient;
import com.example.order_service.dto.UserDTO;
import com.example.order_service.model.Order;
import com.example.order_service.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository orderRepo;
    private final UserClient userClient;

    public OrderController(OrderRepository orderRepo, UserClient userClient) {
        this.orderRepo = orderRepo;
        this.userClient = userClient;
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return orderRepo.save(order);
    }

    @GetMapping("/{id}")
    public Map<String, Object> getOrderWithUser(@PathVariable Long id) {
        Order order = orderRepo.findById(id).orElse(null);
        if (order == null) return Map.of("error", "Order not found");

        UserDTO user = userClient.getUserById(order.getUserId());

        return Map.of(
                "order", order,
                "user", user
        );
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}