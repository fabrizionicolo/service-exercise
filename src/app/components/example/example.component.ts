import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from '@reactivex/rxjs';
import { of } from '@reactivex/rxjs/dist/package/observable/of';
import { first, takeLast } from '@reactivex/rxjs/dist/package/operators';
import { map } from '@reactivex/rxjs/dist/package/operators/map';
import { DependenciesService } from 'src/app/services/dependencies.service';
import { Dependencies2Service } from 'src/app/services/dependencies2.service';
import { RandomNumbersService  } from 'src/app/services/example.service';
import { HttpService } from 'src/app/services/http.service';
import { UserHttp, UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  providers: [{ provide: RandomNumbersService , useClass: DependenciesService }],
})
export class ExampleComponent implements OnInit, OnDestroy {

  constructor(private service: RandomNumbersService, private dependencies2Service: Dependencies2Service,
    private http: HttpService, private router: Router, private userService: UserService) { }

  observable = new Subject<number>();
  subscriptionList: Subscription = new Subscription();

  result: UserModel[] = [];

  onClick() {
    this.service.updateValue();
    this.observable.next(10);
  }

  post() {
    var userHttp: UserHttp = {
      userId: 999,
      body: "examplePost",
      title: "examplePost"
    } 
    this.http.post(userHttp).subscribe(
      response => this.result.push(response),
      error => alert("Operation not successfully")
    )
  }

  delete(id: number) {
    this.http.delete(id).subscribe(
      response => {
        alert("Operation successfully");
        this.get();
      },
      error => alert("Operation not successfully")
    )
  }

  get() {
    this.http.get().subscribe(
      response => this.result = response
    );
  }

  edit(id: number) {
    this.router.navigate(["edit", id]);
  }

  ngOnInit(): void {
    this.service.getValues().subscribe( response => console.log(response) );

    this.dependencies2Service.updateValue();
    
    this.subscriptionList = this.userService.result.subscribe( list => {
      this.result = list; 
    })

    this.userService.getList();


    /*of(10,20,30)
      .pipe(takeLast(2))
      .subscribe((v) => console.log("value: ", v));*/
    
    /*this.observable
      .pipe(first(), map((x) => x * x))
      .subscribe((v) => console.log("value: ", v));*/
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }

}
