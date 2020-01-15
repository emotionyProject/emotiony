import { TestBed } from '@angular/core/testing';

import { EmotioniesService } from './emotionies.service';

describe('EmotioniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmotioniesService = TestBed.get(EmotioniesService);
    expect(service).toBeTruthy();
  });
});
