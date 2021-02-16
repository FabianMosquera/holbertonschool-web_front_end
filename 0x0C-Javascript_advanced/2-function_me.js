function welcomeMessage(fullName) {
    return function () {
        alert('Welcome' + ' ' + fullName);
    };
}

let Guillaume = welcomeMessage('Guillaume');
let Alex = welcomeMessage('Alex');
let Fred = welcomeMessage('Fred');

