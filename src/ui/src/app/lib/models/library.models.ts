import { MusicTrack } from "./catalog.models";
import { AppUser } from "./domain.models";


export interface LibraryStatusDto {
    trackId: number;
    status: string;
}

export const LibraryStatusEnum  = {
    none: "NONE",
    active: "ACTIVE",
    inactive: "INACTIVE"
}

export interface LibraryStatusRequestDto {
    userId: number;
    trackIds: number[];
}

export interface UserMusic {
    id: number;
    isActive: boolean;
    user: AppUser;
    track: MusicTrack;
}

export interface UserLibraryDto {
    count: number;
    library: UserMusic[];
}



