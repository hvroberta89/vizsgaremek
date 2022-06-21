import { CreateStrFromObjPipe } from './create-str-from-obj.pipe';

describe('CreateStrFromObjPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateStrFromObjPipe();
    expect(pipe).toBeTruthy();
  });
});
