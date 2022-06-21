import { ToConfigPipe } from './to-config.pipe';

describe('ToConfigPipe', () => {
  it('create an instance', () => {
    const pipe = new ToConfigPipe();
    expect(pipe).toBeTruthy();
  });
});
