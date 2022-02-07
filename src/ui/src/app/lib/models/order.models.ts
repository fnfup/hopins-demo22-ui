import { MusicTrack } from "./catalog.models";
import { AppUser } from "./domain.models";

export interface MusicOrderDto {
    userId: number;
    items: [];
}

export interface OrderItem {
    id: number;
    orderUID: string;
    track: MusicTrack;
    user: AppUser;
}

export interface UserOrder {
    id: number;
    timestamp: Date;
    orderUID: string;
    itemCount: number;
    user: AppUser;
    orderItems: OrderItem[];
}

export interface UserOrdersDto {
    count: number;
    orders: UserOrder[];
}

export enum OrderStatusEnum {
    none = "NONE",
    successful = "SUCCESSFUL",
    pending = "PENDING"
}
