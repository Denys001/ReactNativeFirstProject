import actions from './actions';
import selectors from './selectors';
import reducer from './reducer'
import sagas from './sagas';

export { reducer, sagas };

export default { ...actions, ...selectors };