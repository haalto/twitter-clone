import { Entity, 
         Column, 
         PrimaryGeneratedColumn, 
         CreateDateColumn, 
         UpdateDateColumn, 
         BaseEntity,
         OneToMany
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

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}