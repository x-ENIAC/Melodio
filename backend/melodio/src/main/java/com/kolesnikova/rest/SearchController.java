package com.kolesnikova.rest;

import com.kolesnikova.service.api.SongService;
import com.kolesnikova.service.dto.SongDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final SongService songService;

    // Получить песни, в название которых входит указанная подстрока
    @GetMapping("/{substring}")
    public ResponseEntity<List<SongDto>> getSongsByPartOfName(@PathVariable String substring) {
        List<SongDto> foundSongs = songService.searchSongsByName(substring);
        return ResponseEntity.ok(foundSongs);
    }
}

