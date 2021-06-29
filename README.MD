# Welcome to the Rabbit MQ Demo

## Getting started

1. run:

    ```bash
        docker-compose up # use -d to run containers in the background
    ```

    Press `Ctrl+c` to stop the docker container.
2. run `npm i` in ___mq___ and ___mq_workers___ projects
3. Go to <http://127.0.0.1:15672>
4. Go to `Queues`
5. Add a queue `Name: messages`
6. in the Postman import `MQ.postman_collection.json`
7. for MySQL test use `http://localhost:8000/api/mysql` and pass the follow variable in to the body:

    ```json
        {
            "msg": "Mysql MSG"
        }
    ```

8. for MQ test use `http://localhost:8000/api/mq`

To remove:

```bash
    docker-compose down -v
```

## Server names

1. `mysql`: MySQL Server
2. `rabbitmq`: RabbitMQ Server
3. `mq`: API app
4. `mq_workers`: MQ Workers app

## How to access

### MySQL

- internal: `mysql:3306`, external: `127.0.0.1:4006`
- Username: `user`
- Password: `pass`

### RabbitMQ

- Username: `user`
- Password: `bitnami`
