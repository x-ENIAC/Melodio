package com.kolesnikova.service;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.Song;
import com.kolesnikova.data.repo.SongRepository;
import com.kolesnikova.service.api.PlaylistService;
import com.kolesnikova.service.api.SongService;
import com.kolesnikova.service.conterters.PlaylistConverter;
import com.kolesnikova.service.conterters.SongConverter;
import com.kolesnikova.service.dto.SongDto;
import com.kolesnikova.service.helpfulDir.songPlayer.SongPlayer;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

@Service
@RequiredArgsConstructor
//@SpringBootApplication(scanBasePackages={"com.kolesnikova.data.repo.SongRepository"})
//@EnableJpaRepositories("com.kolesnikova.data.repo.SongRepository")
//@ComponentScan(basePackages = { "com.kolesnikova.data.repo.SongRepository" })
//@EntityScan("com.kolesnikova.data.repo.SongRepository")
public class SongServiceImpl implements SongService {
    private final SongRepository songRepository;
    private final SongConverter songConverter;
    private final PlaylistService playlistService;
    private final PlaylistConverter playlistConverter;
    private static SongPlayer songPlayer = null;

    @Override
    public SongDto getSongById(Long songId) {
        Song song = songRepository.findById(songId).orElse(null);
        if (song == null) {
            return null;
        }
        return songConverter.toDto(song);
    }

    @Override
    public List<SongDto> getAllSongs() {
        List<Song> songs = songRepository.findAll();
        return songConverter.toDto(songs);
    }

    @Override
    public Boolean changeSongState(String songName, Boolean action) {
        if (action) { // Включить песню
            File curDir = new File(".");
            File[] filesList = curDir.listFiles();
            assert filesList != null;
            for(File f : filesList){
                if(f.isDirectory())
                    System.out.println(f.getName());
                if(f.isFile()){
                    System.out.println(f.getName());
                }
            }

            String songPath = "./backend/melodio/src/main/java/com/kolesnikova/service/helpfulDir/songs/" + songName + ".wav";

            if (songPlayer == null) {
                songPlayer = new SongPlayer(new File(songPath));
                songPlayer.play();
            }
        } else { // Выключить песню
            String songPath = "./backend/melodio/src/main/java/com/kolesnikova/service/helpfulDir/songs/" + songName + ".wav";
            if (songPlayer != null) {
                songPlayer.stop();
                songPlayer = null;
                System.gc();
            }
        }
        return true;
    }

    @Override
    public SongDto createSong(SongDto songDto) {
        Song song = songConverter.toEntity(songDto);
        Song newSong = songRepository.save(song);
        return songConverter.toDto(newSong);
    }

    @Override
    public SongDto deleteSong(Long songId) {
        Song song = songRepository.findById(songId).orElse(null);
        if (song == null) {
            return null;
        }
        songRepository.deleteById(songId);
        return songConverter.toDto(song);
    }

    @Override
    public SongDto changeSongLikedStateForUser(Long songId, Long userId) {
        return null;
    }

    @Override
    public List<SongDto> searchSongsByName(String songNameSubstring) {
        return null;
    }
}

