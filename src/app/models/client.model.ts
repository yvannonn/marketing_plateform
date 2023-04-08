import { User } from "./user.model";

export class Client extends User {
  id: number;
  nom:string;
  prenom:string;
  solde: number;
  adresse: string;


  constructor(
    //pseudo: string,
    //email:string,
    //password:string,
    //roles:[],
    nom:string = 'rien ',
    prenom:string = 'rien',
    solde: number = 0,
    adresse: string = 'rien ',
  ){
    super();
    this.nom = nom;
    this.prenom = prenom;
    this.solde = solde;
    this.adresse = adresse;

  }
}
