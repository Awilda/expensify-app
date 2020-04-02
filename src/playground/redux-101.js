import { createStore } from 'redux';

// Action generators - functions that return action objects

// const incrementCount = ({payload} = {}) => ({
// 	type: 'INCREMENT',
	// incrementBy:typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// same as:
// const incrementCount = ({ incrementBy } = {}) => ({
// 	type: 'INCREMENT',
// 	incrementBy:typeof incrementBy === 'number' ? incrementBy : 1
// });

// same as:
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'

});

const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT': 
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT': 
		// const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			}
		case 'RESET': 
			return {
				count: 0
			};
		default:
			return state;
	}
});

// subscribe - watch state

store.subscribe(() => {
	console.log(store.getState());
});

// to unsubscribe

// const unsubscribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// Actions - an object that gets sent to the store

// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

// unsubscribe();

// store.dispatch({
// 	type: 'RESET'
// });

// store.dispatch({
// 	type: 'DECREMENT'
// });

// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 1
// });

// store.dispatch({
// 	type: 'SET',
// 	count: 101
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 40 }));