package com.kolesnikova.service.api;

import com.kolesnikova.service.dto.RegistrationRequest;
import com.kolesnikova.service.dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long userId);
    UserDto authUser(String username, String password);
    UserDto registrateUser(RegistrationRequest registrationRequest);
}

