import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
  
  @PrimaryColumn()
  id!: string

  @Column()
  password!: string

  @Column()
  username!: string

  @Column()
  nickname!: string
}