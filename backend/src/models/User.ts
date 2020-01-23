import { Model, DataTypes, Sequelize } from 'sequelize'
import { DB_URL } from '../utils/config'
import { Tweet } from './Tweet'

const sequelize = new Sequelize(DB_URL)
sequelize.sync({
  force: true
})

export class User extends Model {
  
  public id!: string
  public username!: string
  public nickname!: string
  public password!: string
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true    
  },
  username: {
    type: DataTypes.STRING(15),
    unique: true
  },
  nickname: {
    type:DataTypes.STRING(15)
  },
  password: {
    type: DataTypes.STRING(1000)
  }
}, {
  sequelize,
  tableName: 'users'
})



/*
User.hasMany(Tweet, {
  sourceKey: 'id',
  foreignKey: 'ownerId',
  as: 'tweets'
})
*/