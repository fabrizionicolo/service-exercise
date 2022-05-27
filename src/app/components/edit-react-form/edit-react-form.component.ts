import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserHttp, UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-react-form',
  templateUrl: './edit-react-form.component.html',
  styleUrls: ['./edit-react-form.component.scss']
})
export class EditReactFormComponent implements OnInit, AfterContentChecked {

  @ViewChild("idProdotto") inputIdProdotto: any;

  constructor(private activeRoute: ActivatedRoute,
    private http: HttpService,
    private userService: UserService,
    private router: Router) { }

  ngAfterContentChecked(): void {
    //console.log(this.inputIdProdotto);
  }

  id: number = 0;
  form: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    userId: new FormControl('', Validators.required),
    title: new FormControl(),
    body: new FormControl('', Validators.minLength(10))
  });

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.http.getObjectById(this.id).subscribe(
          response => this.initForm(response),
          error => alert("Object not found!")
        )
      }
    )
  }

  initForm(data: UserModel): void {
    this.form.patchValue(data);
  }

  onSave() {
    let userHttp: UserHttp = this.form.getRawValue();
    this.http.put(this.id, userHttp).subscribe(
      response => {
        console.log(response);
        this.userService.updateUser(response);
      },
      error => alert("Operation not successfully")
    );
  }

  goToHomepage() {
    if(!this.form.pristine) {
      let choose = confirm("Are you sure?");
      if(!choose)
        return;
    }
    this.router.navigate([""]);
  }

  checkControl(property: string): boolean | undefined {
    return (!this.form.get(property)?.valid && this.form.get(property)?.touched);
  }

  getMessageError(property: string): string {
    var errors = this.form.get(property)?.errors;
    if(errors && errors.required)
      return "Please insert " + property;
    if(errors && errors.max)
      return "Please insert value from 0 to " + errors.max.max;
    if(errors && errors.minlength)
      return "Please insert min " + errors.minlength.requiredLength + " character";
    return "";
  }
}
