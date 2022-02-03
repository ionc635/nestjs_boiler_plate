import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 300 })
  title: string;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "varchar", length: 300 })
  category: string;

  @ManyToOne(() => User, (user) => user.services)
  users: User;
}
