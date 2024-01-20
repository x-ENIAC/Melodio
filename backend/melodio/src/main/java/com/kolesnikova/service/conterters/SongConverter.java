package com.kolesnikova.service.conterters;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.Song;
import com.kolesnikova.data.User;
import com.kolesnikova.service.dto.PlaylistDto;
import com.kolesnikova.service.dto.SongDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SongConverter {
    public SongDto toDto(Song song) {
        SongDto songDto = new SongDto();
        songDto.setId(song.getId());
        songDto.setName(song.getName());
        songDto.setAuthor(song.getAuthor());
        songDto.setDuration(song.getDuration());
        return songDto;
    }

    public Song toEntity(SongDto songDto) {
        Song song = new Song();
        song.setId(songDto.getId());
        song.setName(songDto.getName());
        song.setAuthor(songDto.getAuthor());
        song.setDuration(song.getDuration());
        return song;
    }

    public List<SongDto> toDto(List<Song> songs) {
        List<SongDto> songsDto = new ArrayList<>();
        for (Song song : songs) {
            songsDto.add(toDto(song));
        }
        return songsDto;
    }

    public List<Song> toEntity(List<SongDto> songsDto) {
        List<Song> songs = new ArrayList<>();
        for (SongDto songDto : songsDto) {
            songs.add(toEntity(songDto));
        }
        return songs;

//        User user = song.getUser();
////        user.setId(playlistDto.getUserId());
//        playlist.setUser(user);
//
//        playlist.setDescription(playlistDto.getDescription());
//        return playlist;
    }
}

