const {fork} = require("child_process");

/**
 * Los subprocesos en node, crean una nueva instancia de la maquina V8
 */

const thread1 = fork('thread1.js');
thread1.send({ message: 'proceso padre' });

const thread2 = fork('thread2.js');
thread2.send({ message: 'proceso padre' });
