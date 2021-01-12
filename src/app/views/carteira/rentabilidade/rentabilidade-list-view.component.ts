import { PercentPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarteiraDetailedModel, RentabilidadeChartItem } from '../../Models';
import * as _ from 'lodash';

@Component({
    selector: 'app-rentabilidade-list-view',
    templateUrl: 'rentabilidade-list-view.component.html'
})

export class RentabilidadeListViewComponent implements OnInit {
    @Input() carteira = new CarteiraDetailedModel();
    public chartItemGroupedByYear = new Array<RentabilidadeChartItem>();
    
    constructor(private percentPipe: PercentPipe) { }

    ngOnInit() {
        this.chartItemGroupedByYear = this.convertToChartItem(this.carteira);
    }

    private convertToChartItem(carteira: CarteiraDetailedModel): RentabilidadeChartItem[] {
        let rentabilidadeChartItemList = new Array<RentabilidadeChartItem>();
        rentabilidadeChartItemList = _.chain(this.carteira.rentabilidades)
                        .groupBy("ano")
                        .map((value, key) => (
                            new RentabilidadeChartItem(key,
                                value.map(a => Number.parseFloat(this.percentPipe.transform(a.porcentagem, '1.2-2'))),
                                value.map(a => a.mes),
                                this.percentPipe.transform(_.sumBy(value, 'porcentagem'), '1.2-2'))
                            )
                        ).value();
        return rentabilidadeChartItemList;
    }
}