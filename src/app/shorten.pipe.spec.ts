import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenPipe();
    expect(pipe).toBeTruthy();
  });
});
servers = [
  {
    instanceType: 'medium',
    name: 'Production',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  }
];