import { FlashPhotoDto } from "./flash.photo.dto";

export interface RemarqueDto {
    dt: string;
    ds: string;
    tk: string;
    lvl: number;
    nt: boolean;
    md: FlashPhotoDto[];
}