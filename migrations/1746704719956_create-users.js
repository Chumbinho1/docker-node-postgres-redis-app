exports.shorthands = {
    id: {
        type: 'serial',
        primaryKey: true,
    },
};

exports.up = (pgm) => {
    pgm.createTable('users', {
        id: 'id',
        username: {
            type: 'varchar(50)',
            notNull: true,
        },
        password: {
            type: 'varchar(255)',
            notNull: true,
        },
        email: {
            type: 'varchar(100)',
            notNull: true,
        },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
    });

    pgm.sql(`
        INSERT INTO users (username, password, email)
        VALUES ('user1', 'password1', 'user1@example.com'),
               ('user2', 'password2', 'user2@example.com');
    `);
};

exports.down = (pgm) => {
    pgm.dropTable('users');
};
