import { Model, DataTypes } from 'sequelize'
import sequelize from '../utils/db'
const db = sequelize

export class Tweet extends Model {
  public id!: number
  public userId!: string
  public content!: string
  public likes!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Tweet.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID
  },
  content: {
    type: DataTypes.STRING(284)
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, 
  { 
    sequelize: db,
    tableName: 'tweets', 
  }
)