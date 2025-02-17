import { Component } from '@angular/core';
import { PaginationService } from 'src/app/utilidades/paginacion/pagination.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  clientes = [
    { id: 1, codigo: 'C001', tienda: 'Tienda A', ruc: '12345678901', direccion: 'Av. Principal 123', equipo: 'Equipo 1' },
    { id: 2, codigo: 'C002', tienda: 'Tienda B', ruc: '23456789012', direccion: 'Calle Secundaria 456', equipo: 'Equipo 2' },
    { id: 3, codigo: 'C003', tienda: 'Tienda C', ruc: '34567890123', direccion: 'Jr. Comercio 789', equipo: 'Equipo 3' },
    { id: 4, codigo: 'C004', tienda: 'Tienda D', ruc: '45678901234', direccion: 'Pasaje Industrial 101', equipo: 'Equipo 4' },
    { id: 5, codigo: 'C005', tienda: 'Tienda E', ruc: '56789012345', direccion: 'Mz. Lote 202', equipo: 'Equipo 5' },
    { id: 6, codigo: 'C006', tienda: 'Tienda F', ruc: '67890123456', direccion: 'Av. Central 303', equipo: 'Equipo 6' },
    { id: 7, codigo: 'C007', tienda: 'Tienda G', ruc: '78901234567', direccion: 'Calle Norte 404', equipo: 'Equipo 7' },
    { id: 8, codigo: 'C008', tienda: 'Tienda H', ruc: '89012345678', direccion: 'Jr. Sur 505', equipo: 'Equipo 8' },
    { id: 9, codigo: 'C009', tienda: 'Tienda I', ruc: '90123456789', direccion: 'Pasaje Lima 606', equipo: 'Equipo 9' },
    { id: 10, codigo: 'C010', tienda: 'Tienda J', ruc: '01234567890', direccion: 'Calle Cusco 707', equipo: 'Equipo 10' },
  ];

  constructor(public paginationService: PaginationService) {}

  get pagedItems() {
    return this.paginationService.getPagedItems(this.clientes);
  }

  get pages() {
    return this.paginationService.calculatePages(this.clientes);
  }

  get currentPage() {
    return this.paginationService.currentPage;
  }

  get totalPages() {
    return this.paginationService.getTotalPages(this.clientes);
  }

  goToPage(page: number) {
    this.paginationService.goToPage(page, this.clientes);
  }

  prevPage() {
    this.paginationService.prevPage(this.clientes);
  }

  nextPage() {
    this.paginationService.nextPage(this.clientes);
  }
}

