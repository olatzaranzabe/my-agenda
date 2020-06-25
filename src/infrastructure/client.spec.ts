import { client } from './client';

describe('client', () => {
  it('return a response', async () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('foo');

    const fetchSpy = jest.spyOn(global, 'fetch' as any).mockResolvedValue({
      json: () => Promise.resolve({ bar: 'quux' }),
      ok: true
    });
    const actual = await client('foo');

    expect(actual).toEqual({ bar: 'quux' });
    fetchSpy.mockRestore();
  });

  it('should add localUsername to request', async () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('foo');

    const fetchSpy = jest.spyOn(global, 'fetch' as any).mockResolvedValue({
      json: () => Promise.resolve({ bar: 'quux' }),
      ok: true
    });
    const actual = await client('foo');

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://my-agenda-app.herokuapp.com/auth/home/:foo',
      expect.anything()
    );
  });
});
