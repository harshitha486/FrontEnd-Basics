const os = require('os');

const user = os.userInfo();
console.log(user);

const obj = {
    time : os.uptime(),
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemem : os.freemem()

}

console.log(obj);