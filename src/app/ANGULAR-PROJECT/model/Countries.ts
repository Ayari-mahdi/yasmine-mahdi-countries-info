export class Languages
{
    name:string;
    nativeName:string;
    constructor(name='',nativeName='')
    {
        this.name=name;
        this.nativeName=nativeName;
    }
}
export class Countries 
{

    name : string;
    capital	: string; 
    region : string;  
    population : number;
    area : number;
    nativeName : string;
    languages : Languages[]; 
    flag : string;

    constructor( name='', capital='', region='', population=0, area=0, nativeName='', languages=[], flag='')
{
    
    this.name=name;
    this.capital=capital;
    this.region=region;
    this.population=population;
    this.area=area;
    this.nativeName=nativeName;
    this.languages=languages;
     this.flag=flag;
}
}

