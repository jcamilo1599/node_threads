console.log('thread2');
process.on('message', (message) => {
    console.log(message);
});