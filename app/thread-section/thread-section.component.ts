import { LoadUserThreadsAction } from './../store/actions';
import { ApplicationState } from './../store/application-state';
import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from '@ngrx/store';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService,
              private store:Store<ApplicationState>) {

                store.subscribe(
                  state => console.log('Thread section received', state)
                )

  }



  ngOnInit() {

        this.threadsService.loadUserThreads()
          .subscribe(
            allUserData=> {
              console.log('data rcvd', allUserData)
              this.store.dispatch(
                new LoadUserThreadsAction(allUserData) // first dispatch and set its action
              )
          })

  }

}
