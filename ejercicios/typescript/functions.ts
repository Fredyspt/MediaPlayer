function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 5);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFourTo = createAdder(4);
const fourPlusSix = addFourTo(6);

// Optional params
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const fredy = fullName('Fredy');
const ana = fullName('Ana', 'Sanchez');