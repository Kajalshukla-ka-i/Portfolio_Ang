import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(EmailService);
  // });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService],
    }).compileComponents();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
