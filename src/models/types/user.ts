import { Gender } from "./gender";

export interface User {
    id?: string
    alias: string;
    firstName: string;
    lastName: string;
    gender: Gender
}