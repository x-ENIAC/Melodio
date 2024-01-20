package com.kolesnikova.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistDto {
    private Long id;
//    private Long userId;
    private String name;
    private String description;

    private UserDto user;
}

