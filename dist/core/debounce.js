export default (handle, timeout) => {
    let timeoutid;
    return function (...args) {
        timeoutid = setTimeout(() => {
            clearTimeout(timeoutid);
            handle.apply(this, [...args]);
        }, timeout);
    };
};
