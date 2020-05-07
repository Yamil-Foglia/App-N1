import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public typeOfUser: string;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.typeOfUser = this.getTypeOfUser();
	}

	private getTypeOfUser(): string {
		return this.route.snapshot.paramMap.get('typeOfUser');
	}
	public add(): void {
		this.router.navigate(['/add/' + this.typeOfUser]);
	}

	public galery(): void {
		this.router.navigate(['/galery/' + this.typeOfUser]);
	}

	public graphics(): void {
		this.router.navigate(['/graphics/' + this.typeOfUser]);
	}

	public list(): void {
		this.router.navigate(['/list/' + this.typeOfUser]);
	}
}
