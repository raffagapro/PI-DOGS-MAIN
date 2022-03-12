const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('name', value.toLowerCase());
      },
      // always return the value with the first letter capitalize
      get(){
          return this.getDataValue('name').charAt(0).toUpperCase() + this.getDataValue('name').slice(1);
      }
    },
  });
};
