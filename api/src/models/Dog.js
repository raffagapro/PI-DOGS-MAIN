const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
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
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_imp: {
      type: DataTypes.VIRTUAL,
      get(){
        let values = this.height.replace(" ", "").split("-");
        // values = values.split("-"); //check to see if the chining works!!1
        return `${Math.floor(values[0]/2.54)} - ${Math.floor(values[1]/2.54)}`; //convert to imperial
      },
      set(value){
        throw new Error('No se pueden guardar datos en este campo');
      }
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_imp: {
      type: DataTypes.VIRTUAL,
      get(){
        let values = this.weight.replace(" ", "").split("-");
        // values = values.split("-"); //check to see if the chining works!!
        return `${Math.floor(values[0]*2.21)} - ${Math.floor(values[1]*2.21)}`; //conver to imperial
      },
      set(value){
        throw new Error('No se pueden guardar datos en este campo');
      }
    },
    life_span: {
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  });
};
