import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { NDFPageService } from '../ndf-page.service';

import { NDF } from '../ndf';

@Component({
  selector: 'app-ndfs-search-results',
  templateUrl: './ndfs-search-results.component.html',
  styleUrls: ['./ndfs-search-results.component.css']
})
export class NDFSSearchResultsComponent implements OnInit {
  ndfs$: Observable<NDF[]>;
  private searchTerms = new Subject<string>();
  ndfs: NDF[];

  constructor(private ndfPageService: NDFPageService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.ndfs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.ndfPageService.searchNDFS(term))
    );
  }
}
