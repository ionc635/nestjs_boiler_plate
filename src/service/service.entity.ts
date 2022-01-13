import { Column, Entity } from "typeorm";
import { BaseEntity } from "../model/base.entity";

@Entity("services")
export class Service extends BaseEntity {
  @Column({ type: "varchar", length: 300 })
  title: string;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "varchar", length: 300 })
  category: string;

  @Column({ type: "int" })
  total_likes: number;

  @Column({ type: "boolean", default: false })
  demo: boolean;
}
