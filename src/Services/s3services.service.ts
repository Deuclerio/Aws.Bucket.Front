import { Injectable } from '@angular/core';
import { DeleteObjectOutput, ListObjectsOutput, ListObjectsRequest, ManagedUpload } from 'aws-sdk/clients/s3';
import { AWSError } from 'aws-sdk/lib/error';
import { S3BucketBase } from '../config/s3-bucket-base';
import { ServicesBucket } from './ServicesBucket';


@Injectable({
  providedIn: 'root'
})
export class S3servicesService {



  constructor(private _bucket : ServicesBucket) { }

   saveObject(file: File): boolean  {

    const params = {
      Bucket: this._bucket.GetBuckerName(),
      Key: file.name,
      Body: file,
      ContentType: file.type
    };

    ( this._bucket.GetConfig()).upload(params, (err: Error, data: ManagedUpload.SendData) => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });

    return true;
  }

  //  getAllObjects():  any  {

  //   var result =  (this._bucket.GetConfig()).listObjects({ Bucket: this._bucket.GetBuckerName() }, (err: AWSError, data: ListObjectsOutput) => {

  //     if (err) {
  //       console.log('There was an error get all', err);
  //       return null;
  //     }
  //     return data;
  //   })
  //     .promise();

  //   return null
  // }

   deleteObject(key: any): boolean {

    var result =  ( this._bucket.GetConfig()).deleteObject(
      {
        Bucket: this._bucket.GetBuckerName(),
        Key: key
      }, (err: AWSError, data: DeleteObjectOutput) => {

        if (err) {
          console.log('There was an error deleted your file: ', err);
          return null;
        }

        console.log('There was an error deleted your file: ', data);
        return data;
      });

    // console.log( result.$response.data)

    return true;
  }

}
