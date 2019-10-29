import { AllActions, INCREMENT, DECREMENT, PLUS, PlusAction } from './counter.actions';

export const counterReducer = (
  oldState = 0, action: AllActions) => {
  if (action === null) {
    return oldState;
  }
  switch (action.type ) {
    case INCREMENT:
      return oldState + 1;
    case DECREMENT:
      return oldState - 1;
    case PLUS:
      return oldState + (action as PlusAction).payload;
    default:
      return oldState;
  }
}
