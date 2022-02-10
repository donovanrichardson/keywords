import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,   HttpTestingController, } from '@angular/common/http/testing';
import { Text } from './entity/text';

import { TextService } from './text.service';

describe('TextService', () => {
  let service: TextService;
  let httpController: HttpTestingController;
  let url = 'localhost:8080/api/v1/text/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TextService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addText and return a text', ()=>{
    let inserted : Text = {
      id:'',
      content:"inserted",
      timestamp:"2020-02-04T10:23:45Z"
    }
    let expected : Text = {
      id:'the_id',
      content:"expected",
      timestamp:"2020-02-04T10:23:45Z"
    }
    service.addText(inserted).subscribe(res=>{
      expect(res).toEqual(expected)
    })

    const req = httpController.expectOne({

      method: 'POST',

      url: `${url}`,

    });

    expect(req.request.body).toEqual(inserted);

    req.flush(expected);

  })

  it('should call getTexts and return texts', ()=>{
    let texts: Text[] = [
      {
        id:'the_id',
        content:"expected",
        timestamp:"2020-02-04T10:23:45Z"
      },
      {
        id:'the_id',
        content:"expected 2",
        timestamp:"2020-02-00T20:23:45Z"
      }
    ]

    service.getTexts().subscribe(res=>{
      expect(res).toEqual(texts)
    })

    const req = httpController.expectOne({

      method: 'GET',

      url: `localhost:8080/api/v1/text/10-recent/`,

    });

    expect(req.request.body).toEqual(texts);

    req.flush(texts);

  })
  

});
