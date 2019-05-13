import {Component, EventEmitter, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

const URL = '/api/';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {

    constructor() {
    }

    public uploader: FileUploader = new FileUploader({
        url: URL,
        disableMultipart: false,
        autoUpload: true,
        method: 'post',
        itemAlias: 'attachment',
        allowedFileType: ['image', 'pdf']
    });

    ngOnInit() {
    }

    public onFileSelected(event: EventEmitter<File[]>) {
        const file: File = event[0];
        console.log(file);

    }
}
