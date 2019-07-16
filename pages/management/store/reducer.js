import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show:'个人中心'
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.MANAGEMENT_CHANGE_SHOW:
      return state.set('show',action.show);
    default:
      return state;
  }
}