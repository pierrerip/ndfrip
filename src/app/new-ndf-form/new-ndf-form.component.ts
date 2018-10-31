import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NDF } from '../ndf';
import { NDFPageService } from '../ndf-page.service';

@Component({
  selector: 'app-new-ndf-form',
  templateUrl: './new-ndf-form.component.html',
  styleUrls: ['./new-ndf-form.component.css']
})
export class NewNDFFormComponent implements OnInit {
  ndfs: NDF[];

  constructor(
    private ndfPageService: NDFPageService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getNDFS();
  }

  onSubmit() {}

  goBack(): void {
    this.location.back();
  }

  getNDFS(): void {
    this.ndfPageService
      .getNDFS()
      .subscribe(ndfs => (this.ndfs = ndfs));
  }

  add(nom: string): void {
    nom = nom.trim();
    if (!nom) {
      return;
    }
    this.ndfPageService.addNDF({ nom } as NDF).subscribe(ndf => {
      this.ndfs.push(ndf), this.goBack();
    });
  }
}
