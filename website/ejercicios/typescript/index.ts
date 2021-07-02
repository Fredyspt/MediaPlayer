interface Rectangle {
    width: number
    height: number
}

let rectangle: Rectangle = {
    width: 4,
    height: 6
}

function area(r: Rectangle): number {
    return r.width * r.height;
}

const rectangleArea = area(rectangle);
console.log(rectangleArea);