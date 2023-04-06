import { gamesRepository } from './games-repository';

describe('gamesRepository', () => {
  it('should work', () => {
    expect(gamesRepository()).toEqual('games-repository');
  });
});
