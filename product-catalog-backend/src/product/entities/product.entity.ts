import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column('float')
  @IsPositive()
  price: number;

  @Column({ nullable: true })
  @IsOptional()
  description?: string;
}