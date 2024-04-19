//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  orderNumber: number;

  @Column('text', { nullable: true })
  customerName: string;

  @Column('date', { nullable: true })
  orderDate: Date;

  @Column('text', { nullable: true })
  items: string;

  @Column('real', { nullable: true })
  totalAmount: number;

  @Column('text', { nullable: true })
  shippingAddress: string;

  @Column('text', { nullable: true })
  orderStatus: string;
}
