// Library for making equilateral polygons in HTML SVG format
// Author: Joshua Conn

/**
 *  Updates points attribute on HTML Polygon to render an equilateral triangle
 *  @param polygonElmnt and HTML (dom) polygon element to have its points attribute updated
 *  @param radius half of the width/height of the triangle to render
 *  @param center (point) object with x and y properties
 *  @param rotation in radians
 */
function svgRenderTriangle(polygonElmnt, radius, center={x:0,y:0}, rotate=0) {
    svgRenderNGon(polygonElmnt, radius, center, 3, rotate);
}

/**
 *  Updates points attribute on HTML Polygon to render a square
 *  @param polygonElmnt and HTML (dom) polygon element to have its points attribute updated
 *  @param radius half of the width/height of the square to render
 *  @param center (point) object with x and y properties
 *  @param rotation in radians
 */
function svgRenderSquare(polygonElmnt, radius, center={x:0,y:0}, rotate=Math.PI/4) {
    svgRenderNGon(polygonElmnt, radius, center, 4, rotate);
}

/**
 *  Updates points attribute on HTML Polygon to render a pentagon
 *  @param polygonElmnt and HTML (dom) polygon element to have its points attribute updated
 *  @param radius half of the width/height of the pentagon to render
 *  @param center (point) object with x and y properties
 *  @param rotation in radians
 */
function svgRenderPentagon(polygonElmnt, radius, center={x:0,y:0}, rotate=0) {
    svgRenderNGon(polygonElmnt, radius, center, 5, rotate);
}

/**
 *  Updates points attribute on HTML Polygon to render an equilateral hexagon
 *  @param polygonElmnt and HTML (dom) polygon element to have its points attribute updated
 *  @param radius half of the width/height of the hexagon to render
 *  @param center (point) object with x and y properties
 *  @param rotation in radians
 */
function svgRenderHexagon(polygonElmnt, radius, center={x:0,y:0}, rotate=0) {
    svgRenderNGon(polygonElmnt, radius, center, 6, rotate);
}

/**
 *  Updates points attribute on HTML Polygon to render an equilateral polygon
 *  @param polygonElmnt and HTML (dom) polygon element to have its points attribute upated
 *  @param radius half of the width/height of the polygon to render
 *  @param center an (point) object with x and y properties
 *  @param n 3=triangle (default) 4=square, 5=pentagon, ....
 */
function svgRenderNGon(polygonElmnt, radius, center={x:0,y:0}, n=3, rotate=0) {
    if (n<3) throw "Polygons must have 3 or more sides.";
    var point = {x:0,y:0}, pointStr="";
    var angleDelta = Math.PI*2/n;
    for(p=1; p<=n; p++) {
        point.x=Math.sin(angleDelta*p+rotate)*radius+center.x; 
        point.y=Math.cos(angleDelta*p+rotate)*radius+center.y;
        pointStr+=point.x+","+point.y+" ";
    }
    polygonElmnt.setAttribute("points", pointStr);
}
