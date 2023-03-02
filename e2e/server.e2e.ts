import { App } from './server';

describe('e2e', () => {
  let server: any;

  beforeAll(() => {
    server = new App();
  });

  it('sss', async () => {
    const res = await fetch('http://localhost:3000');
    const da = await res.json();

    expect(da).toBe(234);
  });

  it('sss', async () => {
    const res = await fetch('http://localhost:3000');
    const da = await res.json();

    expect(da).toBe(234);
  });

  afterAll(async () => {
    await server.close();
  });
});
