export class ParticipanteDetailedModel {
    public ID: number;
    public nome: string;
    public idade: number;
    public carteiraComposicao: string;
    public carteiraDescricao: string;
    public rentabilidades: RentabilidadeDetailedModel[];
    public perfil: string;
}

export class CarteiraDetailedModel {
    public ID: number;
    public descricao: string;
    public composicao: string;
    public perfilAdequado: string;
    public rentabilidades: RentabilidadeDetailedModel[];
}

export class RentabilidadeDetailedModel {
    public ano: number;
    public mes: string;
    public porcentagem: number;
}

export class PerfilDetailedModel {
    public ID: number;
    public descricao: string;
    public carteiras: CarteiraDetailedModel[];
}

export class CreateSolicitacaoModel {
    public newPerfil: string;
    public newPerfilID: number;
    public newCarteira: string;
    public newCarteiraID: number;
    public participanteID: number;
}

export class SolicitacaoModel {
    descricao: string;
    status: StatusEnum;
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

export enum StatusEnum {
    pendente = 1,
    aprovada,
    concluida,
    rejeitada,
}
