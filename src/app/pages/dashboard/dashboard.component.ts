import { Component, Input, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend } from 'ng-apexcharts';
import { TarjetaServiceComponent } from 'src/app/tarjeta-service/tarjeta-service.component';
import {MatDialog} from '@angular/material/dialog';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
export interface SideNavToggle {
    screenWidth:number;
    collapsed: boolean;
  }
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  title = 'responsive-mobile-app';
  inSideNavCollapsed = false;
  chartOptions: ChartOptions | undefined;
  monto: number | undefined;
  dataService: any;
  datamonto: any;
  cuotasSeleccionadas: any;
  montoPorCuota: number | undefined;

  datosTabla: any[] = [
    { monto: 1000, cuotas: 6, fechaEmision: '2023-07-01', mensual: 200, tasaInteres: 5 },
    { monto: 2000, cuotas: 12, fechaEmision:'2023-07-02', mensual: 150, tasaInteres: 4 },
    { monto: 3000, cuotas: 24, fechaEmision:'2023-07-03', mensual: 125, tasaInteres: 3 },
  ];
  
  imagenesAleatorias = ["https://mdbootstrap.com/img/new/avatars/8.jpg",
                        "https://mdbootstrap.com/img/new/avatars/6.jpg",
                        "https://mdbootstrap.com/img/new/avatars/7.jpg",
                      ]
  nombresAleatorios = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Mary Brown', 'Michael Lee',];
  amount = ['8000', '2000', '1000', '5000', '7000',];
  fechas: any [] = [
    {fechasTransacciones: '25 Ene,2023'},
    {fechasTransacciones: '01 Feb,2023'},
    {fechasTransacciones: '14 Feb,2023'},
    {fechasTransacciones: '28 Mar,2023'},
    {fechasTransacciones: '18 Jun,2023'},
  ]

  opcionSeleccionada: number | null = null;
  
  constructor( private matDialog:MatDialog) {}
  ingreso(): void {
    const dialogRef = this.matDialog.open(TarjetaServiceComponent,{
      width:'350px',
      data: this.monto
    });

    dialogRef.afterClosed().subscribe((montoIngresado: number | undefined) => {
      if (montoIngresado !== undefined ) {
        this.monto = (this.monto || 0) + montoIngresado;
      }
    });
  } 

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.chartOptions = {
      series: [
        {
          name: "Transacciones Compradas",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Transacciones perdidas",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Posibilidad de subida",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
          "Lun Prox",
          "Mar Prox",
        ]
      },
      yaxis: {
        title: {
          text: "$ pesos"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " pesos";
          }
        }
      },
      legend: { 
        show: true
      }
    };

     this.monto = 800000;
     this.montoPorCuota = 39000;
  }

  guardarMonto(nuevoMonto: number): void {
    this.monto = nuevoMonto;
  }

  pagar(): void {
    const montoActual = 800000;
    const montoDescontado = 50000;
    const cuotas = this.cuotasSeleccionadas;
    this.montoPorCuota = montoDescontado / cuotas;
    const nuevoMonto = montoActual - montoDescontado;
    
    return this.guardarMonto(nuevoMonto)
  }

  cancelar(): void {
    const montoOriginal = 800000;
    this.guardarMonto(montoOriginal);
  }

  seleccionarOpcion(index: number): void {
    this.opcionSeleccionada = index;
  }
  onToggleSideNav(data: SideNavToggle): void {
      this.screenWidth = data.screenWidth;
      this.inSideNavCollapsed = data.collapsed;
    }
  
}
