import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage{

  constructor() { }

  ionViewWillEnter() {
  }

}
