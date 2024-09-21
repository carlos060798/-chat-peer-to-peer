import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';



@Entity({ name: 'RegisterLog' })
export class RegisterLog {



    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('text')
    userid: string;




    @Column({
        type: 'text',
        nullable: true
    })
    fromCurrency: string;

    @Column({
        type: 'text',
        nullable: true
    })

    toCurrency: string;
    @Column({
        type: 'integer',
        nullable: true
    }) 

    amount: number;
    @Column({
        type: 'float',
        nullable: true
    }) 
    result: number;



    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })

    created: Date;


}