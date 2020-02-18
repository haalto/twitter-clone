import { BaseEntity, 
         Entity, 
         Column, 
         CreateDateColumn, 
         UpdateDateColumn, 
         PrimaryGeneratedColumn,
         OneToMany 
} from 'typeorm'
import { User } from './User'

@Entity()
export class Tweet extends BaseEntity{
  
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  userId!: string

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
}