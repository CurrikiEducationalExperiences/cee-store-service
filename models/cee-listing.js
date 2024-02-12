const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { sequelize } = require("../src/utils/database");
const ApiKey = require('./api-key');
const CeeSubscription = require('./cee-subscription');

/*class CeeListing extends Model {}*/

/*
CeeListing.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ceeId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apiKeyId: {
        type: DataTypes.UUID,
        allowNull: false
    }
},
{
    sequelize
});
*/

const CeeListing = sequelize.define('CeeListing', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ceeId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apiKeyId: {
        type: DataTypes.UUID,
        allowNull: false
    }
});


/*
ApiKey.hasMany(CeeListing, {
    foreignKey: 'apiKeyId',
    sourceKey: 'id',
    references: {
        model: 'CeeListing',
        key: 'id'
    }
});

CeeListing.belongsTo(ApiKey, {
    foreignKey: 'apiKeyId',
    targetKey: 'id',
    references: {
        model: 'ApiKey',
        key: 'id'
    }
});

*/

module.exports = CeeListing