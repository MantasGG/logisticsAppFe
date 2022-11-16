import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Route} from "../shared/Route";
import {RoutesService} from "../services/routes.service";
import {CheckpointService} from "../services/checkpoint.service";
import {Checkpoint} from "../shared/Checkpoint";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-routes-management',
  templateUrl: './routes-management.component.html',
  styleUrls: ['./routes-management.component.scss']
})
export class RoutesManagementComponent implements OnInit {

  routesList$: Observable<Route[]> = of();
  checkpointList$: Observable<Checkpoint[]> = of();

  route: Route = {
    // @ts-ignore
    id: null,
    // @ts-ignore
    assignedUserId: null,
    pointA: '',
    pointB: '',
    // @ts-ignore
    startDate: null,
    // @ts-ignore
    endDate: null
  }

  routeForm: FormGroup = new FormGroup({
    pointA: new FormControl(''),
    pointB: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor(private routesService: RoutesService, private checkpointService: CheckpointService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.routeForm = this.formBuilder.group({
      pointA: ['', [Validators.required]],
      pointB: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })
    this.loadRoutes();
    //this.returnCheckpoints(1);
  }

  loadRoutes(): void {
    this.routesList$ = this.routesService.loadRoutes().pipe();
    console.log(this.routesList$);
  }

  returnCheckpoints(routeId: bigint){
    console.log(routeId);
    this.checkpointList$ = this.checkpointService.loadCheckpointsByForumId(routeId).pipe();
    console.warn(this.checkpointList$);
  }


  onSubmit() {
    this.routesService.createRoute(this.routeForm);
    window.location.reload();
  }

  deleteRoute(id: bigint){
    this.routesService.deleteRoute(id);
    window.location.reload();
  }
}
