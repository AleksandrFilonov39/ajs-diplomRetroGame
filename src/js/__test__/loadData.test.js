import GameStateService from "../GameStateService";

test('success load data from localstorage', () => {
    const storageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
    };
    const gameStateService = new GameStateService(storageMock);
    const testState = { 
        currentTurn: 'player', 
        positionedCharacters: [],
        character: null,
        player: true,
        level: 0,
        endGame: false,
        score: 0,
        redDrawPositionsArr: []
    };
    storageMock.getItem.mockReturnValue(JSON.stringify(testState));

    const result = gameStateService.load();

    expect(result).toEqual(testState);
    expect(storageMock.getItem).toHaveBeenCalled();
  });

  test('error load data from localstorage', () => {
    const gameStateService = new GameStateService(null);

    expect(() => gameStateService.load()).toThrow('Invalid state');
  });

  