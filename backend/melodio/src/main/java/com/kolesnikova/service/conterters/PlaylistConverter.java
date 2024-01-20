package com.kolesnikova.service.conterters;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.User;
import com.kolesnikova.service.dto.PlaylistDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PlaylistConverter {
    public PlaylistDto toDto(Playlist playlist) {
        PlaylistDto playlistDto = new PlaylistDto();
        playlistDto.setId(playlist.getId());
        playlistDto.setName(playlist.getName());
//        playlistDto.setUserId(playlist.getUser().getId());
        playlistDto.setDescription(playlist.getDescription());
        return playlistDto;
    }

    public List<PlaylistDto> toDto(List<Playlist> playlists) {
        List<PlaylistDto> playlistsDto = new ArrayList<>();
        for (Playlist playlist : playlists) {
            playlistsDto.add(toDto(playlist));
        }
        return playlistsDto;
    }

    public Playlist toEntity(PlaylistDto playlistDto) {
        Playlist playlist = new Playlist();
        playlist.setId(playlistDto.getId());
        playlist.setName(playlistDto.getName());

        User user = playlist.getUser();
//        user.setId(playlistDto.getUserId());
        playlist.setUser(user);

        playlist.setDescription(playlistDto.getDescription());
        return playlist;
    }
}
