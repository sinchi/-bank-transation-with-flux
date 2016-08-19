import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import constants from './constants';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0;

let BankBalanceStore = {
  getState(){
    return balance;
  },

  addListener(callback){
    return __emitter.addListener(CHANGE_EVENT, callback);
  }
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case constants.CREATE_ACCOUNT:
      console.log('create account event');
      __emitter.emit(CHANGE_EVENT);
      break;

    case constants.DEPOSITED_INTO_ACCOUNT:    
      balance = balance + action.ammount;
      console.log("balance", balance);
      __emitter.emit(CHANGE_EVENT);
      break;

    case constants.WITHDREW_FROM_ACCOUNT:
      console.log(constants.WITHDREW_FROM_ACCOUNT);
      balance = balance - action.ammount;
      console.log("balance", balance);
      __emitter.emit(CHANGE_EVENT);
      break;
  }
});


export default BankBalanceStore;
