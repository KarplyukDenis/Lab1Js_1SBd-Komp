function crossProduct(a, b) {
    let cx = a[1] * b[2] - a[2] * b[1];
    let cy = a[2] * b[0] - a[0] * b[2];
    let cz = a[0] * b[1] - a[1] * b[0];
    return [cx, cy, cz];
}

function areCoplanar(a, b, c) {
    let cross = crossProduct(a, b);
    let dotProduct = cross[0] * c[0] + cross[1] * c[1] + cross[2] * c[2];
    return dotProduct === 0;
}

function getInputVector() {
    let vector = [];
    for (let i = 1; i <= 3; i++) {
        let coordinate = parseFloat(prompt(`Введіть ${i}-у координату вектора:`));
        vector.push(coordinate);
    }
    return vector;
}

let vectorA = getInputVector();
let vectorB = getInputVector();
let vectorC = getInputVector();

if (areCoplanar(vectorA, vectorB, vectorC)) {
    console.log("Введені вектори є компланарними.");
} else {
    console.log("Введені вектори не є компланарними.");
}