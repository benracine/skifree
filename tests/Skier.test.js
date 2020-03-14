import "babel-polyfill";
import { Skier } from '../src/Entities/Skier';
import * as Constants from '../src/Constants';

describe('Test skier movement', () => {
    let skier;

    beforeEach(() => {
        skier = new Skier(0, 0);
    });

    describe('Turning tests', () => {
        it('should turn the skier left_down', () => {
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
        });

        it('should turn the skier left', () => {
            skier.turnLeft();
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
        });

        it('should turn the skier left after a crash', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
            skier.turnLeft();
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
        });
    });
});
