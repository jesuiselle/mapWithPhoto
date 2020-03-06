import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  result: any[];
  id: number;
  myVar: any;
  myComments: any;
  myCommentsAccount: any;
  myLikes: any;
  myUser: any;
  myDescription: any;
  myImageName: any;
  myImageType: any;
  myImage: any;
  myParam = ["1", "2", "3", "4", "5", "6"];
  private subscription: Subscription;
  commentForm: FormGroup;
  buttonStyle: string = 'btn-primary';
  myCommentAdd: number = 0;
  today: number = Date.now();
  registerForm: FormGroup;
  submitted = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (this.myParam.indexOf(params['id']) < 0) {
            this.router.navigate([''], {relativeTo: this.route}); }
          this.id = +params['id'];
        }
      );
    this.http.get('https://my-json-server.typicode.com/jesuiselle/photo/db')
      .subscribe(response => {
        this.result = response['images'];
        let index: number = 0;
        let arr = [];
        for (let entry of this.result) {
          index++;
          if (index === this.id) {
            this.myVar = entry;
            this.myComments = entry.comments;
            this.myCommentsAccount = this.myComments.length;
            this.myUser = entry.user.name;
            this.myImageName = entry.file.name;
            this.myImageType = entry.file.type;
            this.myImage = 'assets/' + this.myImageName + '.' + this.myImageType;
            this.myDescription = entry.description;
            this.myLikes = +entry.likes;
          } } }  );
    this.registerForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
    if (this.myCommentAdd == 0) {
      alert('no comment yet !');
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onBack() {
    this.router.navigate([''], {relativeTo: this.route});
  }

  onProductAdded(event) {
    if (event.srcElement.innerHTML ==='Like' ) {
      //// Like action
      event.srcElement.innerHTML = "Dislike";
      this.buttonStyle = 'btn-warning';
      this.myLikes++;
    } else if (event.srcElement.innerHTML ==='Dislike') {
      //// Dislike action
      event.srcElement.innerHTML = "Like";
      this.buttonStyle = 'btn-primary';
      this.myLikes--;
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      //throw error('Failed to add comment');
      alert ('error');
      return;
    }
    alert('SUCCESS!! :D');
    console.log(this.registerForm.value['comment']);
    this.myCommentAdd++;
    this.registerForm = this.formBuilder.group({
      comment: ['']
    });
  }

}
