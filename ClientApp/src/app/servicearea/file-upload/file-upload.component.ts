import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  @Input() filenameinput: string;
  @Input() preVal: string;
  @Output() picidVal: EventEmitter<string> = new EventEmitter();

  fileid: string = null;// for delete purpose
  url = '/picture/upload';
  textcolorImage: string = "black";

  ImageDisable: boolean = true;
  removeImageButton: boolean = false;
  ImageText: string = "upload";
  picid: string = uuid();
  uploader = new FileUploader({
    url: this.url + "?picid=" + this.picid,
    maxFileSize: 1024 * 1024 * 1
  });
  constructor(private http: HttpClient) { }
  ngOnChanges() {
    if (this.preVal != null) {
      this.removeImageButton = true;
      this.ImageDisable = false;
      this.fileid = this.preVal;
    }

  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { this.uploaderAddingFileStatusChange(); }
    this.uploader.onSuccessItem = (item, response) => {
      let data = JSON.parse(response); //success server response
      this.uploadeerOnSuccess(data);
      this.fileInput.nativeElement.value = '';
    }
    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => { this.uploaderOnFail(); }
  }
  uploaderAddingFileStatusChange() { this.ImageText = "File Added. Now click upload"; this.textcolorImage = "yellow"; }
  uploadeerOnSuccess(data) {

    this.ImageDisable = false;
    this.removeImageButton = true;
    this.ImageText = "Success Upload ";
    this.fileid = data.fileid;//with extension data has arrived
    this.picidVal.emit(data.fileid);
    //console.log(data);
    //console.log(this.picidVal)
    this.textcolorImage = "green";
  }
  uploaderOnFail() {
    this.ImageText = "Failed To Upload";
    this.textcolorImage = "red";
  }
  uploaderOnRemove() {
    this.ImageDisable = true;
    this.ImageText = "File Removed";
    this.textcolorImage = "black";
    this.removeImageButton = false;
    this.fileid = null;
    this.picidVal.emit(null);
  }
  fileInputRemove() {
    //if (this.preVal == null)
    {
      this.http.post("/picture/delete?picid=" + this.fileid, null).subscribe(
        data => { this.uploaderOnRemove(); /*this.picidVal = null*/ },
        error => { this.ImageText = "Error Deleting File"; })
    }
   /* else {
      this.http.post("/picture/delete?picid=" + this.preVal, null).subscribe(
        data => { this.uploaderOnRemove();  },
        error => { this.ImageText = "Error Deleting File"; })
    }*/
    
  }

}
