import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Checkpoint} from "../shared/Checkpoint";
import {CheckpointService} from "../services/checkpoint.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.scss']
})
export class CheckpointsComponent implements OnInit {
  checkpointsList$: Observable<Checkpoint[]> = of();

  checkpointForm: FormGroup = new FormGroup({
    routeId: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(null)
  });

  checkpoint: Checkpoint = {
    // @ts-ignore
    id: null,
    // @ts-ignore
    routeId: null,
    description: '',
    // @ts-ignore
    date: null
  }

  constructor(private checkpointService: CheckpointService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadCheckpoints();
    this.checkpointForm = this.formBuilder.group({
      routeId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  loadCheckpoints(): void {
    this.checkpointsList$ = this.checkpointService.loadCheckpoints().pipe();
  }

  onSubmit() {
    this.checkpointService.createCheckpoint(this.checkpointForm);
    window.location.reload();
  }

  deleteCheckpoint(id: bigint) {
    this.checkpointService.deleteCheckpoints(id);
    window.location.reload();
  }
}
