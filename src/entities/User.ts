import bcrypt from "bcrypt";
import { IsMobilePhone, IsEmail } from "class-validator";
import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text", unique: true})
    @IsEmail()
    email: string;

    @Column({type: "boolean", default: false})
    emailVerified: boolean;

    @Column({ type: "text", unique: true })
    @IsMobilePhone('en-HK')
    phoneNumber: string;

    @Column({ type: "boolean", default: false })
    phoneNumberVerified: boolean;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "text" })
    firstName: string;

    @Column({ type: "text" })
    lastName: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @Column({ type: "text" })
    bio: string;

    @Column({ type: "int" })
    age: number;

    @Column({ type: "text" })
    profilePhoto: string;

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;

    @Column({ type: "boolean", default: false })
    isTalking: boolean;

    @Column({ type: "double precision", default: 0})
    lastLong: number;

    @Column({ type: "double precision", default: 0})
    lastLat: number;

    @Column({ type: "double precision", default: 0})
    lastOrientation: number;

    public comparePasssword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword():Promise<void> {
        if(this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }

    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }
}

export default User;