import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/utilidades/paginacion/pagination.service';

@Component({
  selector: 'app-cotizacion-list',
  templateUrl: './cotizacion-list.component.html',
  styleUrls: ['./cotizacion-list.component.css']
})
export class CotizacionListComponent {
  cotizaciones = [
    { id: 1, cliente: 'Cliente 1', ruc: '12345678901', totalEquipos: 5, estado: 'Visitado' },
    { id: 2, cliente: 'Cliente 2', ruc: '23456789012', totalEquipos: 3, estado: 'Visitado' },
    { id: 3, cliente: 'Cliente 3', ruc: '34567890123', totalEquipos: 7, estado: 'Visitado' },
    { id: 4, cliente: 'Cliente 4', ruc: '45678901234', totalEquipos: 2, estado: 'Visitado' },
    { id: 5, cliente: 'Cliente 5', ruc: '56789012345', totalEquipos: 8, estado: 'Visitado' },
    { id: 6, cliente: 'Cliente 6', ruc: '67890123456', totalEquipos: 4, estado: 'Visitado' },
    { id: 7, cliente: 'Cliente 7', ruc: '78901234567', totalEquipos: 6, estado: 'Visitado' },
    { id: 8, cliente: 'Cliente 8', ruc: '89012345678', totalEquipos: 1, estado: 'Visitado' },
    { id: 9, cliente: 'Cliente 9', ruc: '90123456789', totalEquipos: 9, estado: 'Visitado' },
    { id: 10, cliente: 'Cliente 10', ruc: '01234567890', totalEquipos: 10, estado: 'Visitado' },
  ];

  constructor(public paginationService: PaginationService) {}

  get pagedItems() {
    return this.paginationService.getPagedItems(this.cotizaciones);
  }

  get pages() {
    return this.paginationService.calculatePages(this.cotizaciones);
  }

  get currentPage() {
    return this.paginationService.currentPage;
  }

  get totalPages() {
    return this.paginationService.getTotalPages(this.cotizaciones);
  }

  goToPage(page: number) {
    this.paginationService.goToPage(page, this.cotizaciones);
  }

  prevPage() {
    this.paginationService.prevPage(this.cotizaciones);
  }

  nextPage() {
    this.paginationService.nextPage(this.cotizaciones);
  }
}
