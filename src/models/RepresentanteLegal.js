const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RepresentanteLegal = sequelize.define('RepresentanteLegal', {
    Cc_repleg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        comment: 'Cédula de ciudadanía'
    },
    Nom_repleg: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ape_repleg: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email_repleg: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    Tel1_repleg: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Representantes_Legales',
    timestamps: false
});

module.exports = RepresentanteLegal;