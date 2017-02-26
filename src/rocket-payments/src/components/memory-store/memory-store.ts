import {Component, Injectable} from '@angular/core';

/*
  Generated class for the MemoryStore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Injectable()
@Component({
  selector:'memory-store'

})
export class MemoryStoreComponent {


  private static data:any={
    mastercard:{transactions:[],goodTransaction:[]},
    paypal:{transactions:[], goodTransaction:[]}
  }
  constructor() {

  }

  public getData(cb){
    cb(MemoryStoreComponent.data)
  }

  public newTransaction(transaction:string){
    MemoryStoreComponent.data.mastercard.transactions.push(transaction)
  }

  public updateTransactions(){
    //TODO get transactions from accounts
  }

}
