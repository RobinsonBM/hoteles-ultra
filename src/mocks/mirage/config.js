// mirage/config.js
import { createServer, Model } from 'miragejs';
import userFactory from './factories/user';

createServer({
    models: {
        user: Model,
    },

    factories: {
        user: userFactory,
    },

    seeds(server) {
        server.createList('user', 10);
    },

    routes() {
        this.namespace = '/api';

        this.get('/users', (schema) => {
            return schema.users.all();
        });

        this.get('/users/:id', (schema, request) => {
            const userId = request.params.id;
            return schema.users.find(userId);
        });

        this.post('/users', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            return schema.users.create(attrs);
        });

        this.put('/users/:id', (schema, request) => {
            const userId = request.params.id;
            const newAttrs = JSON.parse(request.requestBody);
            const user = schema.users.find(userId);
            user.update(newAttrs);
            return user;
        });
    },
});
