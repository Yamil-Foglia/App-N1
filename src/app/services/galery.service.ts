import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Help } from '../core/helpers/help';
import { Photo } from '../class/photo';


@Injectable({
	providedIn: 'root'
})
export class GaleryService {

	constructor(private db: AngularFirestore) { }

	public add(photo: Photo): Promise<unknown> {
		return this.db.collection('photos').add(Help.convertToObject(photo));
	}

	public getAll(): AngularFirestoreCollection<unknown> {
		return this.db.collection('photos', ref => ref.orderBy('firebaseTimestamp', 'asc'));
	}
}
