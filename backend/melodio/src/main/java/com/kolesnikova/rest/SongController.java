package com.kolesnikova.rest;

import com.kolesnikova.service.api.SongService;
import com.kolesnikova.service.dto.SongDto;
import com.kolesnikova.service.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/song")
@RequiredArgsConstructor
public class SongController {
    private final SongService songService;

    // Получить песню по её id
    @GetMapping("/{songId}")
    public ResponseEntity<SongDto> getSongById(@PathVariable Long songId) {
        SongDto song = songService.getSongById(songId);
        return ResponseEntity.ok(song);
    }

    // Включить песню
    @GetMapping("/{songId}/play")
    public ResponseEntity<Boolean> playSong(@PathVariable Long songId) {
        SongDto song = songService.getSongById(songId);
        Boolean isPlay = songService.changeSongState(song.getName(), true);
        return ResponseEntity.ok(isPlay);
    }

    // Выключить песню
    @GetMapping("/{songId}/pause")
    public ResponseEntity<Boolean> pauseSong(@PathVariable Long songId) {
        SongDto song = songService.getSongById(songId);
        Boolean isPlay = songService.changeSongState(song.getName(), false);
        return ResponseEntity.ok(isPlay);
    }

    // Создать песню
    @PostMapping
    public ResponseEntity<SongDto> createSong(@RequestBody SongDto songDto) {
        SongDto song = songService.createSong(songDto);
        return ResponseEntity.ok(song);
    }

    // Изменить состояние песни для пользователя (понравившаяся или нет)
    @PostMapping("/{songId}/changeLikedStatus")
    public ResponseEntity<?> changeLikedStatusForUser(@PathVariable Long songId, @RequestBody UserDto userDto) {
        SongDto songDto = songService.changeSongLikedStateForUser(songId, userDto.getId());
        return ResponseEntity.ok(songDto);
    }

    // Удалить песню по её id
    @DeleteMapping("/{songId}")
    public ResponseEntity<SongDto> deleteSong(@PathVariable Long songId) {
        SongDto songDto = songService.deleteSong(songId);
        return ResponseEntity.ok(songDto);
    }

    // Получить список всех песен
    @GetMapping("/all")
    public ResponseEntity<List<SongDto>> getAllSongs() {
        List<SongDto> songs = songService.getAllSongs();
        return ResponseEntity.ok(songs);
    }
}
