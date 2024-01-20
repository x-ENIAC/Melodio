package com.kolesnikova.rest;

import java.util.ArrayList;
import java.util.List;

import com.kolesnikova.service.api.PlaylistService;
import com.kolesnikova.service.api.UserService;
import com.kolesnikova.service.dto.PlaylistDto;
import com.kolesnikova.service.dto.SongDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/playlists")
@RequiredArgsConstructor
public class PlaylistController {
    private final PlaylistService playlistService;
    private final UserService userService;

    // Создать плейлист
    @PostMapping
    public ResponseEntity<PlaylistDto> createPlaylist(@RequestBody PlaylistDto playlistDto) {
        PlaylistDto playlist = playlistService.createPlaylist(playlistDto);
        return ResponseEntity.ok(playlist);
    }

    // Удалить плейлист по его id
    @DeleteMapping("/{playlistId}")
    public ResponseEntity<PlaylistDto> deletePlaylist(@PathVariable Long playlistId) {
        PlaylistDto playlistDto = playlistService.deletePlaylist(playlistId);
        return ResponseEntity.ok(playlistDto);
    }

    // Получить плейлисты конкретного пользователя
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PlaylistDto>> getUserPlaylists(@PathVariable Long userId) {
        List<PlaylistDto> playlists = playlistService.getUserPlaylists(userId);
        return ResponseEntity.ok(playlists);
    }

    // Получить плейлист по id
    @GetMapping("/{playlistId}")
    public ResponseEntity<PlaylistDto> getPlaylistById(@PathVariable Long playlistId) {
        PlaylistDto playlist = playlistService.getPlaylistById(playlistId);
        return ResponseEntity.ok(playlist);
    }

    // Получить все плейлисты
    @GetMapping("/all")
    public ResponseEntity<List<PlaylistDto>> getAllPlaylists() {
        List<PlaylistDto> playlists = playlistService.getAllPlaylists();
        return ResponseEntity.ok(playlists);
    }

    // Получить содержимое плейлиста
    @GetMapping("/{playlistId}/songs")
    public ResponseEntity<List<SongDto>> getPlaylistContent(@PathVariable Long playlistId) {
        List<SongDto> songs = playlistService.getSongsFromPlaylists(playlistId);
        return ResponseEntity.ok(songs);
    }

    // Добавить песню в плейлист
    @PostMapping("/{playlistId}/add/{songId}")
    public ResponseEntity<PlaylistDto> addSongToPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        PlaylistDto updatedPlaylist = playlistService.addSongToPlaylist(playlistId, songId);
        return ResponseEntity.ok(updatedPlaylist);
    }

    // Удалить песню из плейлиста
    @PostMapping("/{playlistId}/delete/{songId}")
    public ResponseEntity<PlaylistDto> deleteSongFromPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        PlaylistDto updatedPlaylist = playlistService.deleteSongFromPlaylist(playlistId, songId);
        return ResponseEntity.ok(updatedPlaylist);
    }
}

