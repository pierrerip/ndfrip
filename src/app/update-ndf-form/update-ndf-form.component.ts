import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NDF } from '../ndf';
import { NDFPageService } from '../ndf-page.service';

@Component({
  selector: 'app-update-ndf-form',
  templateUrl: './update-ndf-form.component.html',
  styleUrls: ['./update-ndf-form.component.css']
})
export class UpdateNdfFormComponent implements OnInit {
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

  update(nom: string): void {
    nom = nom.trim();
    if (!nom) {
      return;
    }
    this.ndfPageService.updateNDF({ nom } as NDF).subscribe(ndf => {
      this.ndfs.push(ndf), this.goBack();
    });
  }
}

