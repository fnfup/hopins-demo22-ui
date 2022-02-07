import { LibraryStatusEnum } from "./library.models";

export interface SearchFilter {
    artist?:[];
    genre?:[];
}

export interface MusicTrack {
    id: number;
    title: string;
    album: string;
    artist: string;
    genre: string;
    // web value only
    status: LibraryStatusEnum;
}

export interface MusicCatalogDto {
    count: number;
    music: MusicTrack[];
}

export interface MusicArtist {
    id: number;
    name: string;
}

export interface MusicGenre {
    id: number;
    name: string;
}
