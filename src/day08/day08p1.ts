export default class Grid {
    private grid: string[];

    constructor(grid: string[]) {
        this.grid = grid;
    }

    isVisibleLeft(row: number, col: number) {
        return this.checkDirectionDecr(col, row, 0, -1);
    }
    isVisibleRight(row: number, col: number): boolean {
        return this.checkDirectionIncr(col, row, this.grid.length, 1);
    }
    isVisibleTop(row: number, col: number): boolean {
        return this.checkDirectionDecr(col, row, this.grid.length, 1);
    }

    private checkDirectionDecr(startCol: number, startRow: number, endCol: number, incr: number) {
        let initialize = true;
        const tree = this.grid[startRow].split('').map(x => +x);
        for (let i = startCol; i > endCol; i = i + incr) {
            initialize = initialize && (+tree[i + incr] <
                +tree[i]);
        }
        return initialize;
    }
    private checkDirectionIncr(startCol: number, startRow: number, endCol: number, incr: number) {
        let initialize = true;
        const tree = this.grid[startRow].split('').map(x => +x);
        for (let i = startCol; i < endCol; i = i + incr) {
            console.log(tree[i + incr])
            console.log(tree[i])
            initialize = initialize && (+tree[i + incr] <
                +tree[i]);
            console.log(initialize)
        }
        return initialize;
    }
}