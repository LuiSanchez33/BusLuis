function grid(section, rows, cols, width, height) {
  this.section = section;
  this.rows = rows;
  this.cols = cols;
  this.width = width;
  this.height = height;

  this.init = function () {
    drawGrid();
    drawCells();
  }

  function drawGrid() {
    this.svg = d3.select(section).append("svg")
      .attr({ width: width * cols, height: height * rows });
  }

  function drawCells() {
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {

        svg.append("rect")
          .attr({ "x": x * width, "y": y * height, "width": width, "height": height })
          .style({ "fill": "green", "stroke": "white", "stroke-width": "1", "opacity": "0.2" });
      }
    }
  }

  this.validateGrid = function (x, y) {
    if (x > 0 && y > 0 && x <= 5 && y <= 5)
      return true;
    else return null;
  }

}