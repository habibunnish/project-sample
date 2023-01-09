import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-posting',
  templateUrl: './admin-posting.component.html',
  styleUrls: ['./admin-posting.component.scss']
})
export class AdminPostingComponent {
  selectedFile!: File;

  constructor(private httpClient:HttpClient){  }
   
  onFileSelected(event:any) {
    this.selectedFile= <File>event.target.files[0];
  }
  onUpload(){
  
    const fd=new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.httpClient.post('http://localhost:3000/uploadFile/',fd ).subscribe(data=>{
      console.log(data);
    })
  }
}
