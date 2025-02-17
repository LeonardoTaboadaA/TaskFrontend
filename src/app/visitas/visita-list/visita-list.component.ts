import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/utilidades/paginacion/pagination.service';

@Component({
  selector: 'app-visita-list',
  templateUrl: './visita-list.component.html',
  styleUrls: ['./visita-list.component.css']
})
export class VisitaListComponent {
  visitas = [
    { id: 1, ruc: '12345678901', cliente: 'Cliente 1', responsable: 'Juan Pérez', fecha: '2025-02-14', hora: '10:00 AM', estado: 'Programado' },
    { id: 2, ruc: '23456789012', cliente: 'Cliente 2', responsable: 'María Gómez', fecha: '2025-02-14', hora: '11:30 AM', estado: 'Programado' },
    { id: 3, ruc: '34567890123', cliente: 'Cliente 3', responsable: 'Carlos Ramírez', fecha: '2025-02-15', hora: '09:45 AM', estado: 'Programado' },
    { id: 4, ruc: '45678901234', cliente: 'Cliente 4', responsable: 'Ana Torres', fecha: '2025-02-15', hora: '02:00 PM', estado: 'Programado' },
    { id: 5, ruc: '56789012345', cliente: 'Cliente 5', responsable: 'Luis Mendoza', fecha: '2025-02-16', hora: '03:30 PM', estado: 'Programado' },
    { id: 6, ruc: '67890123456', cliente: 'Cliente 6', responsable: 'Gabriela Ríos', fecha: '2025-02-16', hora: '04:15 PM', estado: 'Programado' },
    { id: 7, ruc: '78901234567', cliente: 'Cliente 7', responsable: 'Ricardo Fernández', fecha: '2025-02-17', hora: '08:30 AM', estado: 'Programado' },
    { id: 8, ruc: '89012345678', cliente: 'Cliente 8', responsable: 'Sandra López', fecha: '2025-02-17', hora: '10:15 AM', estado: 'Programado' },
    { id: 9, ruc: '90123456789', cliente: 'Cliente 9', responsable: 'Esteban Silva', fecha: '2025-02-18', hora: '01:00 PM', estado: 'Programado' },
    { id: 10, ruc: '01234567890', cliente: 'Cliente 10', responsable: 'Patricia Vega', fecha: '2025-02-18', hora: '03:45 PM', estado: 'Programado' },
  ];

constructor(public paginationService: PaginationService) {}

  get pagedItems() {
    return this.paginationService.getPagedItems(this.visitas);
  }

  get pages() {
    return this.paginationService.calculatePages(this.visitas);
  }

  get currentPage() {
    return this.paginationService.currentPage;
  }

  get totalPages() {
    return this.paginationService.getTotalPages(this.visitas);
  }

  goToPage(page: number) {
    this.paginationService.goToPage(page, this.visitas);
  }

  prevPage() {
    this.paginationService.prevPage(this.visitas);
  }

  nextPage() {
    this.paginationService.nextPage(this.visitas);
  }
}
