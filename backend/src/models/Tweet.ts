import { Model, DataTypes, Sequelize, UUID } from 'sequelize'
import { DB_URL } from '../utils/config'
import { User } from './User'
 
const sequelize = new Sequelize(DB_URL)
sequelize.sync({
  force: true
})

export class Tweet extends Model {
  public id!: number
  public ownerId!: string
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
  ownerId: {
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
    sequelize,
    tableName: 'tweets', 
  }
)

//Tweet.belongsTo(User, { targetKey: 'id' })