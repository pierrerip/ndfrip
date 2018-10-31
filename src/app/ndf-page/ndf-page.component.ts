import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NDF } from '../ndf';
import { NDFPageService } from '../ndf-page.service';

@Component({
  selector: 'app-ndf-page',
  templateUrl: './ndf-page.component.html',
  styleUrls: ['./ndf-page.component.css']
})
export class NDFPageComponent implements OnInit {
  @Input() ndf: NDF;

  constructor(
    private ndfPageService: NDFPageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getNDF();
  }

  getNDF(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ndfPageService
      .getNDF(id)
      .subscribe(ndf => (this.ndf = ndf));
  }

  delete(ndf: NDF): void {
    this.ndfPageService
      .deleteNDF(this.ndf)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.ndfPageService
      .updateNDF(this.ndf)
      .subscribe(() => this.goBack());
  }
}
