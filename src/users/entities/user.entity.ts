import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Comment } from "../../comments/entities/comment.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 300 })
  email: string;

  @Column({ type: "varchar", length: 300 })
  password: string;

  @Column({ type: "varchar", length: 300 })
  nickname: string;

//   @OneToMany((type) => Comment, (comment) => comment.user)
//   comments: Comment[];
}
