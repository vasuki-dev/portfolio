import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit{
currentYear=signal(0);
ngOnInit(): void {
  this.currentYear.set(new Date().getFullYear());
}

}
