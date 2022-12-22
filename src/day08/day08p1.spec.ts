import Grid from './day08p1';

describe('day 08', () => {
    it('given a grid, the edge tree is visible from the left', () => {
        const grid = new Grid([
            "30373",
            "25512",
            "65332",
            "33549",
            "35390"])
        expect(grid.isVisibleLeft(0, 0)).toBeTruthy();
    });
    it('given a grid, the second tree from the left is not visible from the left', () => {
        const grid = new Grid([
            "30373",
            "25512",
            "65332",
            "33549",
            "35390"])
        expect(grid.isVisibleLeft(0, 1)).toBeFalsy();
    });
    it('given a grid, the second tree #4 from the right is not visible from the right', () => {
        const grid = new Grid([
            "30373",
            "25512",
            "65332",
            "33549",
            "35390"])
        expect(grid.isVisibleRight(3, 3)).toEqual(false);
    });
    // this is wrong
    it('given a grid, the second tree #5 from the right is not visible from the right', () => {
        const grid = new Grid([
            "30373",
            "25512",
            "65332",
            "33549",
            "35390"])
        expect(grid.isVisibleTop(1, 1)).toEqual(true);
    });
});
