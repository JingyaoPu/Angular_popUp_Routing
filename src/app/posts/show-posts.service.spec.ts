import { TestBed } from '@angular/core/testing';

import { ShowPostsService } from './show-posts.service';

describe('ShowPostsService', () => {
  let service: ShowPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
