export default (handle: Function, timeout: number): Function => {
    let timeoutid: number
    return function (this: any, ...args: any) {
        timeoutid = setTimeout(() => {
            clearTimeout(timeoutid)
            handle.apply(this, [...args])
        }, timeout)
    }
}