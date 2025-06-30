import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CancellationService } from '../../services/cancellation/cancellation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cancellation, CancelledByOptions } from '../../models/cancellation/cancellation.interface';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-cancellation-page',
  templateUrl: './cancellation-page.component.html',
  styleUrls: ['./cancellation-page.component.scss'],
  standalone: false
})
export class CancellationPageComponent {
  cancellationForm: FormGroup;
  isLoading = false;
  cancellationSuccess = false;

  constructor(
    private fb: FormBuilder,
    private cancellationService: CancellationService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.cancellationForm = this.fb.group({
      reservationId: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  cancelReservation(): void {
    if (this.cancellationForm.invalid) {
      this.cancellationForm.markAllAsTouched();
      return;
    }
  
    const { reservationId, reason } = this.cancellationForm.value;
    const isAdmin = this.authService.getAdmin() !== null;
  
    this.isLoading = true;
  
    this.cancellationService.requestCancellation(reservationId, reason, isAdmin).subscribe({
      next: () => {
        this.isLoading = false;
        this.cancellationSuccess = true;
        this.snackBar.open('Reservation cancelled successfully.', 'Close', { duration: 4000 });
        this.cancellationForm.reset();
      },
      error: (err) => {
        this.isLoading = false;
        const errorMsg =
          err?.error ||                   // plain string error from backend
          err?.error?.message ||          // JSON error with `message` field
          'Cancellation failed. Please try again.';
  
        this.snackBar.open(errorMsg, 'Close', {
          duration: 5000,
          panelClass: 'snack-error'
        });
      }
    });
  }  
}