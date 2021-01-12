export class ParticipanteDetailedModel {
    public nome: string;
    public idade: number;
    public carteiraComposicao: string;
    public carteiraDescricao: string;
    public rentabilidades: RentabilidadeDetailedModel[];
    public perfil: string;
}

export class CarteiraDetailedModel {
    public descricao: string;
    public composicao: string;
    public rentabilidades: RentabilidadeDetailedModel[];
}

export class RentabilidadeDetailedModel {
    public ano: number;
    public mes: string;
    public porcentagem: number;
}

export class RentabilidadeChartItem {
    ano: string;
    percentList: number[];
    monthList: string[];
    total: string;

    constructor(ano?: string, percentList?:number[], monthList?:string[], total?:string) {
        this.ano = ano || '';
        this.percentList = percentList || [];
        this.monthList = monthList || [];
        this.total = total || '';
    }
}

// Message template
export class MessageModel {
    public tipo: number;
    public texto: string;
}
