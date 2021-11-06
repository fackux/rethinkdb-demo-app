export interface Message {
    id?: string;
    from: string; // User.id
    to: string; // User.id
    text: string;
    readed: boolean;
    readedAt: Date | null;
    createdAt: Date;
}