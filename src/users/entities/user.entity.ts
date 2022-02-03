import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Service } from "../../services/entities/service.entity";
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

  @OneToMany(() => Service, (service) => service.users)
  services: Service[];

  @ManyToMany(() => Comment, (comment) => comment.users)
  comments: Comment[];
}
