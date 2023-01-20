console.log('thread1');
process.on('message', (message) => {
    console.log(message);
});