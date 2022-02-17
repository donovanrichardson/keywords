import { Keyword } from "./keyword";

export interface Text{
    id?: string;
    content: string;
    timestamp: string;
    keywords?: Keyword[];
}