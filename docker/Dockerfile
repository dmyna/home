ARG MONGO_VERSION

FROM mongodb/mongodb-community-server:latest

ENTRYPOINT mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 & \
    MONGOD_PID=$!; \
    INIT_REPL_CMD="rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })"; \
    until (mongosh $MONGO_INITDB_DATABASE --port $MONGO_REPLICA_PORT --eval "$INIT_REPL_CMD"); do \
        sleep 1; \
    done; \
    echo "REPLICA SET ONLINE"; \
    #mongosh --eval "db.getSiblingDB('$MONGO_INITDB_DATABASE').createUser({ user: '$MONGO_INITDB_ROOT_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{ role: 'root', db: '$MONGO_INITDB_DATABASE' }] })"; \
    #echo "ADMIN USER CREATED"; \
    wait $MONGOD_PID;