module.exports = (sequelize, DataTypes)=>{
    const EmployeeData = sequelize.define("EmployeeData", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return EmployeeData;
}