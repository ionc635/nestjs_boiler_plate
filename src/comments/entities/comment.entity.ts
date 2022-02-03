import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  serviceId: number;

  @Column()
  message: string;

  @ManyToMany(() => User, (user) => user.comments)
  @JoinTable({ name: "user_comment" })
  users: User[];
}
