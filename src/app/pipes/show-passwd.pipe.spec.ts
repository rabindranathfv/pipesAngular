import { ShowPasswdPipe } from './show-passwd.pipe';

describe('ShowPasswdPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowPasswdPipe();
    expect(pipe).toBeTruthy();
  });
});
