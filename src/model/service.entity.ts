import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "service" })
export class Service extends BaseEntity {
  @Column({ type: "varchar", length: 300 })
  title: string;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "varchar", length: 300 })
  inner_image: string;

  @Column({ type: "varchar", length: 300 })
  outer_image: string;

  @Column({ type: "varchar", length: 300 })
  category: string;

  @Column({ type: "int" })
  total_likes: number;

  @Column({ type: "varchar", length: 300 })
  url: string;

  @Column({ type: "boolean", default: false })
  demo: boolean;
}
