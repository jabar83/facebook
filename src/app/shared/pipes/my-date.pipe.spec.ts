import { async } from '@angular/core/testing';
import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe = new MyDatePipe();
 
  beforeEach(() => {
    pipe = new MyDatePipe();
  });


  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });

 


  it('should work', () => {
    const input ='Wed Oct 3 2222 10:14:47 GMT+0200 (czas środkowoeuropejski standardowy)';
    const output = pipe.transform(input);
    expect(output).toEqual('3 października 2222, 10:14');
  });

  it('should return empty string for falsy values', () => {
    const array = ['', 0, false, null, undefined, NaN];
    array.forEach(element => {
      const output = pipe.transform(element);
      expect(output).toEqual('');
    });
    
  });

  it('should return empty string for non date-strings', () => {
    const input ='Wen Oct 3 2222 10:14:47 GMT+0200 (czas środkowoeuropejski standardowy)';
    const output = pipe.transform(input);
    expect(output).toEqual('');
  });

});
