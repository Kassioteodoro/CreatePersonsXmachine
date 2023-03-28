module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });
  return table;
};