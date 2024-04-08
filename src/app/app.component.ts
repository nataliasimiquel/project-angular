import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from './service/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nimitz-front';
  buttonHidden = false;
  statusList: any[] = [];
  data: string = '';
  estadoComMaisAlertasENegativos: string = '';
  selectedEstado: string = '';
  estados: string[] = [];
  estadoStatus: { status: any; data: any; }[] = [];
  selectedDate: string = '';
  statusPorData:{ estado: any; status: any; data: any; }[] = [];



  constructor(
    private router: Router,
    private statusService: StatusService) {}

  ngOnInit(): void {
    this.getStatus();
    this.getEstadoComMaisAlertasENegativos();
    this.getEstados();
  }

  getStatus(): void {
    this.statusService.getStatus()
      .subscribe((data: any) => {
        this.statusList = data;

      });
  }
  getEstadoComMaisAlertasENegativos(): void {
    this.statusService.getEstadoComMaisAlertasENegativos()
      .subscribe((estado: string) => {
        this.estadoComMaisAlertasENegativos = estado;
      });
  }

  getEstados(): void {
    this.statusService.getStatus()
    .subscribe((data: any) => {
      this.estados = data.map((item: any) => item.estado);
    });
  }
  onEstadoChange(): void {
    if (this.selectedEstado) {
      this.statusService.getStatusPorEstado(this.selectedEstado)
        .subscribe((data: any[]) => {
          this.estadoStatus = [];
          data.forEach((item: any) => {
            const status = item.status;
            const data = this.formatarData(item.data);

            this.estadoStatus.push({ status: status, data: data });
          });
        });
    }
  }

  buscarStatusPorData(): void {
    if (this.selectedDate) {
      this.statusService.getStatusPorData(this.selectedDate)
        .subscribe((status: any[]) => {
          this.statusPorData = [];
          status.forEach((item: any) => {
            const estado = item.estado;
            const status = item.status;
            const data = this.formatarData(item.data);

            this.statusPorData.push({ estado: estado, status: status, data: data });
          });
        });
    } else {
      console.log('Selecione uma data antes de buscar.');
    }
  }

  formatarData(data: any): string {
    const ano = data[0];
    const mes = data[1];
    const dia = data[2];
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
  }
}
