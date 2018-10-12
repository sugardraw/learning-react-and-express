let data = require('./todos.json');


export function randomArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}


export function getRandomTagLine() {
    const tagLines = ['This is my bucket list', 'This is my shopping list', 'This is my travel list','This is longest list', 'This is my tasks list'];
    return randomArray(tagLines);
}

export function calculateMembers(){
    return data.length;
}