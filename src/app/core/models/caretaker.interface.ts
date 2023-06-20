import { Available } from "./available.interface";
import { Comment } from './comment.interface'

export interface Caretaker {
    id:            string;
    fullName:      string;
    description:   string;
    age:           number;
    ocupation:     string;
    calification:  number;
    available:     Available[];
    hourlyRate:    string;
    comments:      Comment[];
}

