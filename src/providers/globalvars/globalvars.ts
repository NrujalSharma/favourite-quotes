import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class GlobalvarsProvider {

  tabIndex: number;

  constructor() {
    this.tabIndex = 0;
  }

  setTabIndex(value: number) {
    this.tabIndex = value;
  }

  getTabIndex() {
    return this.tabIndex;
  }
}
