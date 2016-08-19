import  { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  dispatch(action={}){
    console.log("dispatch action", action);
    super.dispatch(action);
  }
}

export default new AppDispatcher();
