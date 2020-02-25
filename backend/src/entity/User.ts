import { Entity, 
         Column, 
         PrimaryGeneratedColumn, 
         CreateDateColumn, 
         UpdateDateColumn, 
         BaseEntity,
         OneToMany,
         ManyToMany,
         JoinTable
} from 'typeorm'
import { Tweet } from './Tweet'

@Entity()
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  password!: string

  @Column()
  username!: string

  @Column()
  nickname!: string

  @Column({default: 'placeholder bio'})
  bio!: string

  @OneToMany(type => Tweet, tweet => tweet.user)
  tweets!: Tweet[]

  @ManyToMany(type => Tweet, tweet => tweet.likedBy)
  public likes!: Tweet[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}