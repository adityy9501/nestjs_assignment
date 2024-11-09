
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(8)
  password: string;
  @Column({ unique: true })
  username: string;
}
