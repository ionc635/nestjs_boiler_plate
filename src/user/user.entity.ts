import { Column, Entity } from "typeorm";
import { BaseEntity } from "../model/base.entity";

@Entity("users")
export class User extends BaseEntity {
  @Column({ type: "varchar", length: 300 })
  email: string;

  @Column({ type: "varchar", length: 300 })
  password: string;

  @Column({ type: "varchar", length: 300 })
  nickname: string;
}
