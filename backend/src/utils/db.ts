import { Sequelize } from 'sequelize'
import { DB_URL } from './config'

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres'
})
sequelize.sync({
  force: true
})

export default sequelize