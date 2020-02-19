import { BaseEntity, 
         Entity, 
         Column, 
         CreateDateColumn, 
         UpdateDateColumn, 
         PrimaryGeneratedColumn,
         ManyToOne, 
         ManyToMany,
         JoinTable
} from 'typeorm'
import { User } from './User'

@Entity()
export class Tweet extends BaseEntity{
  
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  content!: string

  @Column({
    default: 0
  })
  likes!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(type => User, user => user.tweets)
  user!: User

  @ManyToMany(type => User, user => user.likes)
  @JoinTable()
  likedBy!: User[]
}