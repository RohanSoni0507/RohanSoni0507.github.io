const express = require('express');
const expressWs = require('express-ws');
const app = express();
const port = 3000;

expressWs(app);

app.ws('/', (ws, req) => {
    ws.on('message', (message) => {
        app.getWss().clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});