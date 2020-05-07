import { Help } from '../core/helpers/help';

export class Photo {

    public idFirebase: string;
    public user: string;
    public date: string;
    public type: boolean;
    public firebaseTimestamp: number;

    constructor(){}

    public static create(user: string, type: boolean): Photo {
        let photo = new Photo();
        photo.user = user;
        photo.type = type;
        photo.date = Help.dateOfString();
        photo.firebaseTimestamp = Date.now();
        
        return photo;
    }
}
