package com.kolesnikova.service;

import com.kolesnikova.data.User;
import com.kolesnikova.data.repo.UserRepository;
import com.kolesnikova.service.api.UserService;
import com.kolesnikova.service.conterters.UserConverter;
import com.kolesnikova.service.dto.RegistrationRequest;
import com.kolesnikova.service.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserConverter userConverter;
    @Override
    public UserDto createUser(UserDto userDto) {
        User user = userConverter.toEntity(userDto);
        User savedUser = userRepository.save(user);
        return userConverter.toDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return null;
        }
        return userConverter.toDto(user);
    }

    @Override
    public UserDto authUser(String username, String password) {
        return null;
    }

    @Override
    public UserDto registrateUser(RegistrationRequest registrationRequest) {
        return null;
    }
}