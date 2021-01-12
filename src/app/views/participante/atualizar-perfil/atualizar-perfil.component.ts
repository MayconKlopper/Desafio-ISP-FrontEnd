import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ParticipanteService } from '../../../services/participante.service';
import { UtilsService } from '../../../utils.service';
import { CarteiraDetailedModel, CreateSolicitacaoModel, PerfilDetailedModel, questaoModel } from '../../Models';

@Component({
    selector: 'app-atualizar-perfil',
    templateUrl: 'atualizar-perfil.component.html'
})

export class AtualizarPerfilComponent implements OnInit {
    public questaoList = new Array<questaoModel>();
    public perfil = new PerfilDetailedModel();
    public questionarioForm: FormGroup;
    public atualizarCarteira = false;

    public get questoesFormArray() {
        return this.questionarioForm.get('questoes') as FormArray;
    }

    constructor(private participanteService: ParticipanteService,
        private ngxUiLoaderService: NgxUiLoaderService,
        private formBuilder: FormBuilder,
        private utilsService: UtilsService,
        private router: Router) { }

    ngOnInit() {
        this.ngxUiLoaderService.start();
        this.buildReactForm();
        this.participanteService.getQuestionario().subscribe(
            (questaoList) => {
                this.questaoList = questaoList;
                this.buildQuestoesFormGroup(this.questoesFormArray, this.questaoList);
            },
            (error) => {
                this.ngxUiLoaderService.stop();
            },
            () => {
                this.ngxUiLoaderService.stop();
            }
        );
    }

    private buildReactForm() {
        this.questionarioForm = this.formBuilder.group({
            questoes: this.formBuilder.array([])
        });

        const questaoFormArray = this.questionarioForm.get('questoes') as FormArray;
    }

    private buildQuestoesFormGroup(questaoFormArray: FormArray, questaoList: questaoModel[]) {
        questaoList.forEach(questao => {
            questaoFormArray.push(
                this.formBuilder.group({
                    descricao: [ { value: questao.descricao, disabled: true } ],
                    pontuacao: [ questao.pontuacao, [ Validators.required, Validators.min(0), Validators.max(10) ] ]
                })
            )
        });
    }

    private calculatePontuation(): number {
        let pontuacaoTotal = 0;
        for (const questao of this.questoesFormArray.value) {
            pontuacaoTotal += questao.pontuacao;
        }

        return pontuacaoTotal;
    }

    public updateCarteira() {
        const pontuacaoTotal = this.calculatePontuation();

        this.ngxUiLoaderService.start();
        this.participanteService.calculatePerfil(pontuacaoTotal).subscribe(
            (perfil) => {
                this.perfil = perfil;
                this.atualizarCarteira = true;
            },
            (error) => {
                this.ngxUiLoaderService.stop();
            },
            () => {
                this.ngxUiLoaderService.stop();
            }
        );
    }

    public createSolicitacao(carteira: CarteiraDetailedModel) {
        debugger
        let createSolicitacaoModel = new CreateSolicitacaoModel();
        createSolicitacaoModel.newCarteira = carteira.descricao;
        createSolicitacaoModel.newCarteiraId = carteira.id;
        createSolicitacaoModel.newPerfil = this.perfil.descricao;
        createSolicitacaoModel.newPerfilId = this.perfil.id;
        createSolicitacaoModel.participanteId = this.utilsService.getParticipanteID();

        this.participanteService.createSolicitacao(createSolicitacaoModel).subscribe(
            () => {
                this.router.navigateByUrl('/solicitacoes');
            },
            (error) => {
                this.ngxUiLoaderService.stop();
            },
            () => {
                this.ngxUiLoaderService.stop();
            }
        );
    }
}