import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto'

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url:'http://localhost:4222'
})

stan.on('connect', () => {
    console.log('Listener connected to NATS');
    
    const options = stan
    .subscriptionOptions()
    .setManualAckMode(true) // acknowledment mode to manual

    const subscription = stan.subscribe(
        'ticket:created', // channel we are subscribing to
        'orders-service-queue-group', // queue group we subscribe to 
        options
        );

    subscription.on('message', (msg : Message) => {
        // get data from the message
        const data = msg.getData();

        // make sure the data of the message recieved is of type string
        if(typeof data === 'string'){
            console.log(`Received event#${msg.getSequence()}, with data: ${data}`);
        }

        // acknowledge that the message is recieved
        msg.ack();
    })
})