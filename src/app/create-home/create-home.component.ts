import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../service/home.service';
import {FileUpload} from '../FileUpload';
import {UploadFileService} from '../service/upload-file.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  formGroup: FormGroup;
  message: string;
  isCreatFailed = false;

  constructor(private homeService: HomeService,
              private fb: FormBuilder,
              private uploadService: UploadFileService) {
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
      image: null
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formGroup.patchValue( {image: this.uploadService.image});
      const {value} = this.formGroup;
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
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    console.log(this.currentFileUpload);
    // this.data.setValue({ avatar: this.currentFileUpload.url});
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
