import { Address } from "./address";
import { Contact } from "./contact";

export class User {
  
    name: string; // Required Field
    username: string; // Required field.. Must be at least 4 characters long
    phone: number; // Must be a valid phone number
    client: string; // Check database for a valid client
    address: Address;
    contacts: Contact [];
}
