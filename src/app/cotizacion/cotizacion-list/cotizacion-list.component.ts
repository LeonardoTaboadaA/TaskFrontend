import { Component } from '@angular/core';
import { Router } from '@angular/router';

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


  // Variables para la paginación
  currentPage = 1;
  itemsPerPage = 5; // Número de elementos por página
  pagedItems: any[] = [];
  pages: number[] = [];

  constructor(private router: Router)
  {
    this.calculatePages();
    this.updatePagedItems();
  }

  nuevaCotizacion(){
    this.router.navigate(['cotizaciones/crear']);
  }



  // Calcular el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.cotizaciones.length / this.itemsPerPage);
  }

  // Calcular las páginas disponibles
  calculatePages() {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  // Actualizar los elementos de la página actual
  updatePagedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.cotizaciones.slice(startIndex, endIndex);
  }

  // Ir a una página específica
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedItems();
    }
  }

  // Página anterior
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedItems();
    }
  }

  // Página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedItems();
    }
  }
}
