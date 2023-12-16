import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 1500,
      panelClass: ['success-toasts'],
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      panelClass: ['error-toast'],
    });
  }

  showPersonSuccess(message: string): void {
    setTimeout(() => {
      this.snackBar.open(message, 'Close', {
        duration: 1500,
        panelClass: ['success-toasts'],
      });
    }, 1600);
  }

  showPersonError(message: string): void {
    setTimeout(() => {
      this.snackBar.open(message, 'Close', {
        duration: 2000,
        panelClass: ['error-toast'],
      });
    }, 1600);
  }

  showCompanionsSuccess(message: string): void {
    setTimeout(() => {
      this.snackBar.open(message, 'Close', {
        duration: 1500,
        panelClass: ['success-toasts'],
      });
    }, 3200);
  }

  showCompanionsError(message: string): void {
    setTimeout(() => {
      this.snackBar.open(message, 'Close', {
        duration: 2000,
        panelClass: ['error-toast'],
      });
    }, 3200);
  }
}
