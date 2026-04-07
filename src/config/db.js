const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crear instancia de Sequelize para MySQL
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: console.log, // Ponlo en true para ver las consultas SQL
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Función para probar la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión exitosa a MySQL');
        console.log(`📊 Base de datos: ${process.env.DB_NAME}`);
        console.log(`🔌 Host: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
        
        // Probar consulta simple
        const [results] = await sequelize.query('SELECT NOW() as fecha_actual, VERSION() as version_mysql');
        console.log('🕒 Fecha actual en MySQL:', results[0].fecha_actual);
        console.log('🐬 Versión MySQL:', results[0].version_mysql);
        
        return true;
    } catch (error) {
        console.error('❌ Error al conectar a MySQL:', error.message);
        console.error('📋 Detalles del error:', error.parent);
        return false;
    }
};

module.exports = { sequelize, testConnection };