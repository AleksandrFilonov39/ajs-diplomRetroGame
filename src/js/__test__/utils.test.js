import { calcTileType } from "../utils";

test.each([
    ['top-left', 0, 8 , 'top-left'],
    ['top-right', 7, 8 , 'top-right'],
    ['top', 1, 8 , 'top'],
    ['bottom-left', 56, 8 , 'bottom-left'],
    ['bottom-right', 63, 8 , 'bottom-right'],
    ['bottom', 57, 8 , 'bottom'],
    ['right', 15, 8 , 'right'],
    ['left', 16, 8 , 'left'],
    ['center', 9, 8 , 'center']
])(
    ('should show position'),
    (_, index, field, expected) => {
        const position = calcTileType(index, field);
        expect(position).toBe(expected);
    }
)