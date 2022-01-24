import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
