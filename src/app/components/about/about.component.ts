import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private firstQueryParam;
  private secondQueryParam;
  private authStatus: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {


    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.firstQueryParam = queryParams['customQuery'];
      this.secondQueryParam = queryParams['secondQueryParam'];
    });
  }

  ngOnInit() {
    console.log(this.firstQueryParam);
    console.log(this.secondQueryParam);

    if ((this.firstQueryParam && this.secondQueryParam) != null) {
      alert('First query param: ' + this.firstQueryParam + '\n' + 'Second query param: ' + this.secondQueryParam);
    }
  }

  onNavigate() {
    this.router.navigate(['']);
  }


}
