import { Model, DataTypes } from 'sequelize'
import { Association } from 'sequelize'
import { Tweet } from './Tweet'
import sequelize from '../utils/db'
const db = sequelize

export class User extends Model {
  
  public id!: string
  public username!: string
  public nickname!: string
  public password!: string

  public readonly tweets?: Tweet[]
  public static associations: {
    tweets: Association<User, Tweet>;
  }
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
  sequelize: db,
  tableName: 'users'
})

User.hasMany(Tweet, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'tweets'
})