import { PlaylistClass } from "../../authorized-zone/playlists/Playlists";

/*
user_id == -1 => this playlist FOR ALL USERS
*/

let testPlaylists : PlaylistClass[] = [
    {
        id: 0,
        name: "Popular songs",
        description: "It is popular nowadays",
        label: "system_playlist",
        songs_list: [
            1,
            5,
            6,
            7,
            8
        ],
        user_id: -1
    },
    {
        id: 1,
        name: "New songs",
        description: "It is new songs",
        label: "system_playlist",
        songs_list: [
            7
        ],
        user_id: -1
    },
    {
        id: 10,
        name: "Liked songs",
        description: "My liked",
        label: "liked_playlist",
        songs_list: [
            3,
            5
        ],
        user_id: 1
    },
    {
        id: 11,
        name: "Super puper rock",
        description: "Admin playlist 1",
        label: "user_playlist",
        songs_list: [
            11,
            12,
            13,
            14
        ],
        user_id: 1
    },
    {
        id: 12,
        name: "«Брат» и «Брат-2»",
        description: "Саундтреки из любимых фильмов",
        label: "user_playlist",
        songs_list: [
            15,
            16,
            17,
            18,
            19
        ],
        user_id: 1
    }
];

export default function getTestPlaylists() {
    return testPlaylists;
}