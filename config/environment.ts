export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost/clinica'
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || '9687722db4a742d732a99dcb4e40e772'
    }
}