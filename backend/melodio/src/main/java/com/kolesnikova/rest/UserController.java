package com.kolesnikova.rest;

import com.kolesnikova.security.JwtTokenProvider;
import com.kolesnikova.service.api.PlaylistService;
import com.kolesnikova.service.api.UserService;
import com.kolesnikova.service.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final PlaylistService playlistService;

    // Создать пользователя
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.createUser(userDto);
        return ResponseEntity.ok(createdUser);
    }

    // Получить информацию о пользователе по id
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long userId) {
        UserDto user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    // Получить понравившиеся песни пользователя
    @GetMapping("/{userId}/likedSongs")
    public ResponseEntity<PlaylistDto> getLikedSongs(@PathVariable Long userId) {
        PlaylistDto likedSongs = playlistService.getUserLikedSongs(userId);
        return ResponseEntity.ok(likedSongs);
    }

    // Авторизовать пользователя
    @PostMapping("/auth")
    public ResponseEntity<?> authUser(@RequestBody AuthRequest authRequest) {
        UserDto user = userService.authUser(authRequest.getLogin(), authRequest.getPassword());
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid credentials!");
        }

        String token = jwtTokenProvider.createToken(user.getLogin());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // Зарегистрировать пользователя
    @PostMapping("/registrate")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        UserDto user = userService.registrateUser(registrationRequest);
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid fields!");
        }
        String token = jwtTokenProvider.createToken(user.getLogin());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}

