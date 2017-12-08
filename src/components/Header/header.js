import { Promise } from "core-js/library/web/timers";

new Promise(() => {
    setTimeout(() => console.log(123), 1000)    
})

Reflect.apply(Math.floor, undefined, [1.75])