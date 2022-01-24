import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
// import { User } from "../../users/entities/service.entity";

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
}
