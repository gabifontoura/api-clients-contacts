import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, } from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true})
  email: string;

  @Column({ length: 15, unique: true })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}


