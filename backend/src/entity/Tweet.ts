import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Tweet {
  
  @PrimaryColumn()
  id!: string

  @Column()
  userId!: string

  @Column()
  content!: string

  @Column()
  likes!: number
}
