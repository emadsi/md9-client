import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-football-school',
  standalone: false,
  templateUrl: './football-school.component.html',
  styleUrl: './football-school.component.scss'
})
export class FootballSchoolComponent {
  registrationForm!: FormGroup;
  shirtSizes: string[] = ['3XS', '2XS', 'XS', 'S', 'M', 'L', 'XL'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      idNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      grade: ['', Validators.required],
      parentPhone: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]],
      hasHealthCondition: [false],
      healthDetails: [''],
      shirtSize: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });

    this.registrationForm.get('hasHealthCondition')?.valueChanges.subscribe(value => {
      const healthDetailsControl = this.registrationForm.get('healthDetails');
      if (value) {
        healthDetailsControl?.setValidators(Validators.required);
      } else {
        healthDetailsControl?.clearValidators();
        healthDetailsControl?.setValue('');
      }
      healthDetailsControl?.updateValueAndValidity();
    });
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      console.log('📝 Submitted Data:', this.registrationForm.value);
      // TODO: Send data to backend
    }
  }
}
