import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListObjectsOutput } from 'aws-sdk/clients/s3';
import { S3servicesService } from '../Services/s3services.service';
import { ApiServices } from 'src/Services/ApiServices';
import { ServicesBucket } from 'src/Services/ServicesBucket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: ListObjectsOutput = { Contents: [] };

  constructor(private bucketS3Service: S3servicesService, private apiServices: ApiServices, private _bucket: ServicesBucket) {

  }

  ngOnInit(): void {
    this._bucket.GetConfig();

     this.GetAllObjects();
  }

   SaveObject(input: any) {
     var file = input.files[0];
     this.bucketS3Service.saveObject(file).then(result => {
       if (result) {
         alert("Salvo com sucesso")
         this.GetAllObjects();
       }
       else
         alert("Error ao salvar")

     });
   }

   GetAllObjects() {
     this.bucketS3Service.getAllObjects()
       .then(result => {
         this.list = result
         console.log(result.Contents)
       });
   }

   DeleteObject(key: any) {
     this.bucketS3Service.deleteObject(key)
       .then(result => {
         if (result) {
           alert("Deletado com sucesso")
           this.GetAllObjects();
         }
         else
           alert("Error ao deletar")
       });
   }

  GetConsultar() {

    this.apiServices.GetConsultar().subscribe(response => { console.log(response) });

  }

   GetLink(key: any): string {
     return `https://${this.bucketS3Service._bucket.GetBuckerName()}.s3.amazonaws.com/${key}`
   }



}
