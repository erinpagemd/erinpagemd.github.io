import expect from 'expect';
import acss from '../acss';

describe('acss utility method', () => {
  it('works with a bunch of arguments as strings', () => {
    const clsStr = acss('Class1', 'Class2');

    expect(clsStr).toEqual('Class1 Class2');
  });

  it('works with a bunch of arguments as strings and arrays', () => {
    const clsStr = acss('Class1', ['Class2', 'Class3']);

    expect(clsStr).toEqual('Class1 Class2 Class3');
  });

  it('works with a bunch of arguments as arrays', () => {
    const clsStr = acss(['Class0', 'Class1'], ['Class2', 'Class3']);

    expect(clsStr).toEqual('Class0 Class1 Class2 Class3');
  });
});
