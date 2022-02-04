import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { getMockRequestService } from '../../shared/mocks/request.service.mock';
import { HALEndpointServiceStub } from '../../shared/testing/hal-endpoint-service.stub';
import { RemoteDataBuildService } from '../cache/builders/remote-data-build.service';
import { NotificationsService } from '../../shared/notifications/notifications.service';
import { CoreState } from '../core.reducers';
import { ClaimedTaskDataService } from './claimed-task-data.service';
import { of as observableOf } from 'rxjs';
import { FindListOptions } from '../data/request.models';
import { RequestParam } from '../cache/models/request-param.model';
import { getTestScheduler } from 'jasmine-marbles';
import { TestScheduler } from 'rxjs/testing';
import { HttpOptions } from '../dspace-rest/dspace-rest.service';
import { createSuccessfulRemoteDataObject$ } from '../../shared/remote-data.utils';

describe('ClaimedTaskDataService', () => {
  let scheduler: TestScheduler;
  let service: ClaimedTaskDataService;
  let options: HttpOptions;
  const taskEndpoint = 'https://rest.api/task';
  const linkPath = 'claimedtasks';
  const requestService: any = getMockRequestService();
  const halService: any = new HALEndpointServiceStub(taskEndpoint);
  const rdbService = {} as RemoteDataBuildService;
  const notificationsService = {} as NotificationsService;
  const http = {} as HttpClient;
  const comparator = {} as any;
  const objectCache = {
    addPatch: () => {
      /* empty */
    },
    getObjectBySelfLink: () => {
      /* empty */
    }
  } as any;
  const store = {} as Store<CoreState>;

  function initTestService(): ClaimedTaskDataService {
    return new ClaimedTaskDataService(
      requestService,
      rdbService,
      store,
      objectCache,
      halService,
      notificationsService,
      http,
      comparator
    );
  }

  beforeEach(() => {
    scheduler = getTestScheduler();
    service = initTestService();
    options = Object.create({});
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    options.headers = headers;
  });

  describe('submitTask', () => {
    it('should call postToEndpoint method', () => {
      const scopeId = '1234';
      const body = {
        submit_approve: 'true'
      };

      spyOn(service, 'postToEndpoint');
      requestService.uriEncodeBody.and.returnValue(body);

      service.submitTask(scopeId, body);

      expect(service.postToEndpoint).toHaveBeenCalledWith(linkPath, body, scopeId, options);
    });
  });

  describe('claimTask', () => {

    it('should call postToEndpoint method', () => {

      spyOn(service, 'postToEndpoint').and.returnValue(observableOf(null));

      scheduler.schedule(() => service.claimTask('scopeId', 'poolTaskHref').subscribe());
      scheduler.flush();

      const postToEndpointOptions: HttpOptions = Object.create({});
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'text/uri-list');
      postToEndpointOptions.headers = headers;

      expect(service.postToEndpoint).toHaveBeenCalledWith(linkPath, 'poolTaskHref', null, postToEndpointOptions);
    });
  });

  describe('returnToPoolTask', () => {
    it('should call deleteById method', () => {
      const scopeId = '1234';

      spyOn(service, 'deleteById');

      service.returnToPoolTask(scopeId);

      expect(service.deleteById).toHaveBeenCalledWith(linkPath, scopeId, options);
    });
  });

  describe('findByItem', () => {

    it('should call searchTask method', () => {
      spyOn((service as any), 'searchTask').and.returnValue(observableOf(createSuccessfulRemoteDataObject$({})));

      scheduler.schedule(() => service.findByItem('a0db0fde-1d12-4d43-bd0d-0f43df8d823c').subscribe());
      scheduler.flush();

      const findListOptions = new FindListOptions();
      findListOptions.searchParams = [
        new RequestParam('uuid', 'a0db0fde-1d12-4d43-bd0d-0f43df8d823c')
      ];

      expect(service.searchTask).toHaveBeenCalledWith('findByItem', findListOptions);
    });
  });
});
