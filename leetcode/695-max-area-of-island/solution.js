/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                area = getArea(grid,i,j);
                if (area > maxArea)
                    maxArea = area;
            }
        }
    }
    function getArea(g, i, j) {
        if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] ===0)
            return 0;
        g[i][j] = 0;
        return 1+ getArea(g, i-1, j) + getArea(g, i+1, j) + getArea(g, i, j-1) + getArea(g, i, j+1);
    };
    return maxArea;
};
