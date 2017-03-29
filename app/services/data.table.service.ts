import {Component} from '@angular/core';
import { Injectable } from '@angular/core';
import {Data} from './data';
import { TABLEDATA } from './mock-data';

@Injectable()
export class DataTableService{
	

  constructor() { }



  getDatatablefromServices(): Promise<Data[]> {
    return Promise.resolve(TABLEDATA);
  }


}