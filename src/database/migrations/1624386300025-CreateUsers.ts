import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateUsers1624386300025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                /* Column ID */ 
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                /* -------- */ 
                /* Column Name */     
                    {
                        name: "name",
                        type:"varchar"
                    },
                /* -------- */
                /* Column Email */      
                    {
                        name:"email",
                        type:"varchar"
                    },
                /* -------- */    
                /* Column Admin */
                    {
                        name:"admin",
                        type:"boolean",
                        default:"false"
                    },
                /* -------- */    
                /* Column Created_At */
                    {
                        name: "created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                /* -------- */
                /* Column Updated_At */
                    {
                        name: "updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
