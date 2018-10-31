import { Component, OnInit } from '@angular/core';

import { NDF } from '../NDF';

import { NDFPageService } from '../ndf-page.service';

@Component({
  selector: 'app-ndfs',
  templateUrl: './ndfs.component.html',
  styleUrls: ['./ndfs.component.css']
})
export class NDFSComponent implements OnInit {
  ndfs: NDF[];

  constructor(private ndfPageService: NDFPageService) {}

  ngOnInit() {
    this.getNDFS();
  }

  getNDFS(): void {
    this.ndfPageService
      .getNDFS()
      .subscribe(ndfs => (this.ndfs = ndfs));
  }

  delete(ndf: NDF): void {
    this.ndfs = this.ndfs.filter(r => r !== ndf);
    this.ndfPageService.deleteNDF(ndf).subscribe();
  }
}
