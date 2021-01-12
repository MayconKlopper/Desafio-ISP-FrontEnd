export class ParticipanteDetailedModel {
    public id: number;
    public nome: string;
    public idade: number;
    public carteiraComposicao: string;
    public carteiraDescricao: string;
    public rentabilidades: RentabilidadeDetailedModel[];
    public perfil: string;
}

export class CarteiraDetailedModel {
    public id: number;
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
    public id: number;
    public descricao: string;
    public carteiras: CarteiraDetailedModel[];
}

export class CreateSolicitacaoModel {
    public newPerfil: string;
    public newPerfilId: number;
    public newCarteira: string;
    public newCarteiraId: number;
    public participanteId: number;
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

export class questaoModel {
    descricao: string;
    pontuacao: number;;
}

export enum StatusEnum {
    pendente = 1,
    aprovada,
    concluida,
    rejeitada,
}
