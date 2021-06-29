# Welcome to the Rabbit MQ Demo

## Getting started

1. run:

    ```bash
        docker-compose up # use -d to run containers in the background
    ```

    Press `Ctrl+c` to stop the docker container.

2. Go to <http://127.0.0.1:15672>
3. Go to `Queues`
4. Add a queue `Name: messages`
5. in the Postman import `MQ.postman_collection.json`
6. for MySQL test use `http://localhost:8000/api/mysql` and pass the follow variable in to the body:

    ```json
        {
            "msg": "Mysql MSG"
        }
    ```

7. for MQ test use `http://localhost:8000/api/mq`

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
