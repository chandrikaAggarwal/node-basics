// const show = (n) => {
//     console.log(`Hello after ${n} seconds`);
// }

// setTimeout(show, 4 * 1000, '4');
// setTimeout(show, 8 * 1000, '8');


let cntr = 1;
const intId = setInterval(() => {
    console.log(`Loop: ${cntr++}`);

    if (cntr > 5) {
        console.log('Done');
        clearInterval(intId);
    }
}, 1000);