const queues = require('amqplib');

async function queueConnect(){
    try {
        const optionConnect = {
            protocol:'amqp',
            hostname:'localhost',
            port: 5672,
            username:'backend',
            password: '12345', 
            vhost:'/',
            authMechanism: ['PLAIN','AMQPLAIN','EXTERNAL']
        };

        const connection = await queues.connect(optionConnect);
        console.log('[INFO]: Connected');
    } catch (error) {
        console.log('[ERROR]: ', error);
    }
}

queueConnect()