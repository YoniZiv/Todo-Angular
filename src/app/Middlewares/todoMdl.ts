// import {LOGIN, LOGIN_SUCCESS} from '../auth/actions.service';

export const todoMdl = store => next => action => {
  return next(action);

  // if (action.type === ADD) {
  //   setTimeout(() => {
  //     // next({type: LOGIN_SUCCESS, payload: {name: 'NIR'}});
  //     next({type: LOGIN_SUCCESS, payload: action.payload});
  //     // this.router.navigate(['/home']);
  //   }, 3000);
  //   return next(action);
  // }
  // return next(action);
};
