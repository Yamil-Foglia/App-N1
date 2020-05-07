import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-add',
	templateUrl: './add.page.html',
	styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

	public type;
	public flag;

	constructor(private camera: Camera) { }

	ngOnInit() {
		this.flag = true;
	}

	public mg(): void {
		this.cam(true);
	}

	public nmg(): void {
		this.cam(false);
	}

	public cam(type: boolean): void {
		this.flag = false;
		this.type = type;
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => { 
			let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {});
	}


}

