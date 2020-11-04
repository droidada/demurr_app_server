import mongoose from 'mongoose';
import { User } from './user.model';
import { Role } from './role.model';
import { Address } from './address.model';
import { Bank } from './bank.model';
import { Sheet } from './summary-sheet.model';
import { Request } from './request.model';
import { Company } from './company.model';
import { Tarrif } from './tarrif.model';


const ROLES = ["admin", "shipping-company", "bank", "shippers-council"];

export { 
    mongoose, 
    User, 
    Role, 
    ROLES, 
    Address,
    Bank,
    Sheet,
    Request,
    Company,
    Tarrif
 }