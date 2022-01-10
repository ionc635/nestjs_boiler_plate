import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @Column({ type: 'varchar', length: 300 })
  nickname: string;

  @Column({ type: 'varchar', length: 300 })
  profile: string;

  @Column({ type: 'boolean', default: 300 })
  email_verified: boolean;

  @Column({ type: 'varchar', length: 300 })
  email_key: string;

  @Column({ type: 'varchar', length: 300 })
  signup_method: string;
}
