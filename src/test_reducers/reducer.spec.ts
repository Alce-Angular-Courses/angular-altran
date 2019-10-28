import { reducer } from 'redux/reducer';
import { INCREMENT, DECREMENT, PLUS10 } from 'redux/actions';

fdescribe('Pruebas de los reducers', () => {
  it('should be 1 after increment', () => {
    expect(reducer(0, INCREMENT)).toEqual(1);
  });
  it('should be -1 after decrement', () => {
    expect(reducer(0, DECREMENT)).toEqual(-1);
  });
  it('should be 10 after plus10', () => {
    expect(reducer(0, PLUS10)).toEqual(10);
  });
});
