import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  currentPage = 1;
  itemsPerPage = 5;
  pages: number[] = [];

  constructor() {}

  // Obtener total de páginas
  getTotalPages(items: any[]): number {
    return Math.ceil(items.length / this.itemsPerPage);
  }

  // Calcular páginas disponibles
  calculatePages(items: any[]): number[] {
    const totalPages = this.getTotalPages(items);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Obtener los elementos paginados de la lista
  getPagedItems(items: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  // Cambiar de página
  goToPage(page: number, items: any[]) {
    if (page >= 1 && page <= this.getTotalPages(items)) {
      this.currentPage = page;
    }
  }

  // Página anterior
  prevPage(items: any[]) {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Página siguiente
  nextPage(items: any[]) {
    if (this.currentPage < this.getTotalPages(items)) {
      this.currentPage++;
    }
  }
}
