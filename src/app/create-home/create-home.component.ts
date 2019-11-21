import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent implements OnInit {
  formGroup: FormGroup;
  message: string;
  isCreatFailed = false;

  constructor(private homeService: HomeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      room: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bedroom: ['', [Validators.required, Validators.min(0)]],
      bathroom: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
      priceByNight: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const {value} = this.formGroup;
      console.log(value.role);
      console.log(value);
      this.homeService.createHome(value)
        .subscribe(next => {
          console.log(next);
          this.isCreatFailed = false;
          this.formGroup.reset({
            name: '',
            room: '',
            address: '',
            bedroom: '',
            bathroom: '',
            description: '',
            priceByNight: '',
            category: '',
          });
        }, error => {
          this.message = 'Tạo không thành công';
          this.isCreatFailed = true;
        });
    }
  }

}
