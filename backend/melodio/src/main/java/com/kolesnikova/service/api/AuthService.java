package com.kolesnikova.service.api;

import com.kolesnikova.service.dto.AuthRequest;
import com.kolesnikova.service.dto.AuthResponse;

public interface AuthService {
    AuthResponse authUser(AuthRequest request);
}

