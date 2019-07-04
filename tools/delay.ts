export default (time: number = 100): Promise<null> => new Promise(
    resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
