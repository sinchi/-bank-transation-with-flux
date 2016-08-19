import AppDispatcher from './AppDispatcher';
import constants from './constants';

let BankActions = {

  createAccount(){
    AppDispatcher.dispatch({
      type: constants.CREATE_ACCOUNT,
      ammount: 0
    });
  },

  depositIntoAccount(ammount){
    AppDispatcher.dispatch({
      type: constants.DEPOSITED_INTO_ACCOUNT,
      ammount: ammount
    });
  },

  withdrewFromAccount(ammount){
    AppDispatcher.dispatch({
      type: constants.WITHDREW_FROM_ACCOUNT,
      ammount : ammount
    })
  }
}

export default BankActions;
