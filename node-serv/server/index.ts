import AppServer from './server';

async function initServer() {
    const app = new AppServer(3000);
    await app.listen();
}

initServer();