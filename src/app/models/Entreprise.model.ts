import { User } from "./user.model";

export class Entreprise extends User {
  id:number
  nomEntreprise :string;
  solde : number

  constructor(
    nomEntreprise:string,
    solde: number
  ){
    super();
    this.nomEntreprise= nomEntreprise;
    this.solde = solde;

  }
}
