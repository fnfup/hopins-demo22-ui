
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
}

export interface MusicCatalogDto {
    count: number;
    music: MusicTrack[];
}

