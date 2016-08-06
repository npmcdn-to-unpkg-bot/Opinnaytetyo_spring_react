import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';


export function bootstrap(dispatch) {
  const boundActions = bindActionCreators(actions, dispatch);

  return () => {
	  boundActions.fetchGists();
  };
}
