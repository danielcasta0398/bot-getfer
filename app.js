// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create({
        session: 'session-name', //name of session
        multidevice: true, // for version not multidevice use false.(default: true)

    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });


async function start(client) {


    client.onMessage(async (message) => {

        console.log(message.type);

        if (message.body === 'Hi' && message.isGroupMsg === false) {

            client
                .sendText(message.from, 'Welcome Venom 🕷')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

            console.log(message.from);
        }

        if (message.body === "contacto") {
            await client
                .sendContactVcard('34641009503@c.us', '573154577015@c.us', 'Daniel')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body === "botones") {
            const buttons = [
                {
                    "buttonText": {
                        "displayText": "SI"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "NO"
                    }
                }
            ]
            await client.sendButtons(message.from, 'Terminos y condiciones', buttons, 'Esta de acuerdo con nuestra politica de trartamiento de datos para iniciar con tu solicitud')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body === "lista") {

            let sections = [
                {
                    title: "Section 1",
                    rows: [
                        {
                            rowId: "1",
                            title: "Element 1",
                            description: "Description 1",
                        },
                        {
                            rowId: "2",
                            title: "Element 2",
                            description: "Description 2",
                        },
                    ]
                },
                {
                    title: "Section 2",
                    rows: [
                        {
                            rowId: "3",
                            title: "Element 3",
                            description: "Description 3",
                        },
                        {
                            rowId: "4",
                            title: "Element 4",
                            description: "Description 4",
                        },
                    ]
                },
            ];
            await client.sendListMenu("34641009503@c.us", "Title", "Description", "Choose", sections)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }


        if (message.body === "botones tema") {

            let botones = [
                {
                    url: 'https://orkestral.io/',
                    text: 'Orkestral Cloud'
                },
                {
                    phoneNumber: '+55 11 91438-0641',
                    text: 'Suporte Orkestral'
                },
                {
                    id: '1',
                    text: 'Button 1'
                },
                {
                    id: '2',
                    text: 'Button 2'
                }
            ]

            await client.sendButtonsTemplate("34641009503@c.us", "Title", botones, "Description")
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }


        if (message.type === "location") {

            const lat = message.lat
            const lng = message.lng

            await client.sendText(message.from, `Estamos enviando nuevamente tus coordenadas las cuales son\n*Latitud:* ${lat}\n*Longitud:* ${lng} `)
            await client
                .sendLocation(message.from, lat, lng)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });


}