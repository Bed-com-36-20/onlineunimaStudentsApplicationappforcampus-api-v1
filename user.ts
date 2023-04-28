import {
    Entity, Column, PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class user{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,
        default: '',
    })
    emailAddress: string;

    @Column({
        nullable: false,
        default:'',
    })

    @Column()
    password: String;
}