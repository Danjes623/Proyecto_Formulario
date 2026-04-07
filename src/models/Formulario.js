const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Formulario = sequelize.define('Formulario', {
    Id_form: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Cc_repleg: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nit_entc: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_dep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_mun: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Num_cont: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Total_form: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    }
}, {
    tableName: 'Formularios',
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: false
});

module.exports = Formulario;