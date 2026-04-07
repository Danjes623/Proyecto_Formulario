const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize, testConnection } = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

// Ruta para probar conexión a MySQL desde el navegador
app.get('/api/test-db', async (req, res) => {
    try {
        const [results] = await sequelize.query('SELECT NOW() as fecha, DATABASE() as base_datos');
        res.json({
            success: true,
            data: results[0],
            message: 'Conexión a MySQL exitosa'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error en la conexión a MySQL',
            error: error.message
        });
    }
});

// Iniciar servidor
app.listen(PORT, async () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📋 Endpoints disponibles:`);
    console.log(`   - GET  /api/health   (verificar servidor)`);
    console.log(`   - GET  /api/test-db  (probar MySQL)`);
    
    // Probar conexión a MySQL al iniciar
    await testConnection();
});