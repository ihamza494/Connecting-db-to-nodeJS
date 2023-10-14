module.exports = (sequelize, DataTypes)=>{
    const Reviews = sequelize.define("Reviews", {
        reviewBody: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Reviews;
}