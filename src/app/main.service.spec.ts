import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';


import { MainDatabaseService } from './main-database.service';

describe('IllnessService', () => {
  let service: MainService;

  beforeEach(() => {
    service = new MainService(new MainDatabaseService());
  });


  it('getIllness(5) - expect illness (Intra-Abdominal Infections) ', ( async () => {
    service.getMain(5).subscribe(result => {
      expect(result).toBeDefined();
      expect(result.name).toBe('Intra-Abdominal Infections');
      expect(result.section.length).toBe(1);
    });
  }));

  it('getIllness(100) - expect null', ( async () => {
    service.getMain(100).subscribe(result => {
      expect(result).not.toBeDefined();
    });
  }));

  it('getIllness(null) - expect null', ( async () => {
    service.getMain(null).subscribe(result => {
      expect(result).not.toBeDefined();
    });
  }));

  it('total number of illness in getMAINS() - expect 14', ( async () => {
    service.getMains().subscribe(result => {
      expect(result.length).toBe(14);
    });
  }));

  it('updateMessage - expect update', ( async () => {
    expect(MAINS[1].section[0].message[1]).toBe('The listed oral antibiotics have excellent or very good bioavailability');

    service.updateMessage(MAINS[1], 0, 1, 'Alisa and Lily go to Shenzhen' ); {
    expect(MAINS[1].section[0].message[1]).toBe('Alisa and Lily go to Shenzhen');
    }
  }));

  it('addSection - expect 12', ( async () => {
    service.addSection(MAINS[0]); {
      expect(SECTIONS.length).toBe(12);
      expect(SECTIONS[SECTIONS.length - 1].id).toBe(11);
      expect(MAINS[0].section.length).toBe(3);
    }
  }));

  it('addSection with null value - expect no change', ( async () => {
      expect(SECTIONS.length).toBe(12);
      expect(SECTIONS[SECTIONS.length - 1].id).toBe(11);
      service.addSection(null); {
      expect(SECTIONS.length).toBe(12);
      expect(SECTIONS[SECTIONS.length - 1].id).toBe(11);
    }
  }));

  it('updateIllnessName - expect "A brand new ill"', ( async () => {
    service.updateMainName(MAINS[5], 'A brand new ill'); {
      expect(MAINS[5].name).toBe('A brand new ill');
    }
  }));
// How to update illness name on null illness?
  it('updateIllnessName with a null illness - expect "A brand new ill"', ( async () => {
    service.updateMainName(null, 'A brand new ill'); {
    }
  }));

  it('updateTitle - expect "Lily went to beach"', ( async () => {
    service.updateTitle( MAINS[0],  1, 'Lily went to beach' ); {
      expect(MAINS[0].section[1].title).toBe('Lily went to beach');
      expect(SECTIONS[1].title).toBe('Lily went to beach');
    }
  }));

  // How to write expect result for a null updateTitle?
  it('updateTitle on null section - expect "Lily went to beach"', ( async () => {
    service.updateTitle( null,  1,  'Lily went to beach' ); {}
  }));

  it('deleteMessage - expect message shrink', ( async () => {
    expect(MAINS[0].section[0].message[3]).toBeDefined();
    expect(MAINS[0].section[0].message.length).toBe(4);
    service.deleteMessage(MAINS[0], 0, 3, ); {
    expect(MAINS[0].section[0].message[3]).toBeUndefined();
    expect(MAINS[0].section[0].message[2]).toBeDefined();
    expect(MAINS[0].section[0].message.length).toBe(3);
    }
  }));

  it('deleteMessage one more time - expect no change', ( async () => {
    expect(MAINS[0].section[0].message.length).toBe(3);
    expect(MAINS[0].section[0].message[3]).toBeUndefined();
    expect(MAINS[0].section[0].message.length).toBe(3);
    service.deleteMessage(MAINS[0], 0, 2, );
    service.deleteMessage(MAINS[0], 0, 1, );
    service.deleteMessage(MAINS[0], 0, 0, );
    service.deleteMessage(MAINS[0], 0, 0, ); {
    expect(MAINS[0].section[0].message[2]).toBeUndefined();
    expect(MAINS[0].section[0].message.length).toBe(0);
    }
  }));

  it('deleteLink - expect shrink by 1', ( async () => {
    expect(MAINS[0].section[1].link[4]).toBeDefined();
    expect(MAINS[0].section[1].link.length).toBe(5);
    expect(LINK.length).toBe(23);
    expect(MAINS.length).toBe(14);
    expect(LINK[10]).toBeDefined();
    expect(LINK.find(link => link.id === 10)).toBeDefined();
    service.deleteLink(MAINS[0], 1, 4, ); {
    expect(MAINS[0].section[1].link[4]).toBeUndefined();
    expect(MAINS[0].section[1].link[2]).toBeDefined();
    expect(MAINS[0].section[1].link.length).toBe(4);
    expect(LINK.length).toBe(22);
    expect(MAINS.length).toBe(13);
    expect(LINK.find(link => link.id === 10)).toBeUndefined();
    }
  }));

  it('deleteLink delete an unexist link - expect no change', ( async () => {
    expect(MAINS[0].section[1].link.length).toBe(4);
    expect(LINK.length).toBe(22);
    expect(MAINS.length).toBe(13);
    service.deleteLink(MAINS[0], 1, 5, ); {
    expect(MAINS[0].section[1].link.length).toBe(4);
    expect(LINK.length).toBe(22);
    expect(MAINS.length).toBe(13);
    }
  }));

  it('deleteSection - expect shrink by 1', ( async () => {
    expect(MAINS[0].section[1]).toBeDefined();
    expect(MAINS[0].section.length).toBe(3);
    expect(SECTIONS.length).toBe(12);
    service.deleteSection(MAINS[0], 1, ); {
    expect(MAINS[0].section.length).toBe(2);
    expect(MAINS[0].section[2]).toBeUndefined();
    expect(SECTIONS.length).toBe(11);
    }
  }));

  it('addMessage - expect add by 1', ( async () => {
    expect(SECTIONS[2].message.length).toBe(5);
    expect(MAINS[1].section[0].message[5]).toBeUndefined();
    expect(MAINS[1].section[0].message.length).toBe(5);
    service.addMessage(MAINS[1], 0); {
    expect(MAINS[1].section[0].message.length).toBe(6);
    expect(MAINS[1].section[0].message[5]).toBe('Please enter the message');
    expect(SECTIONS[2].message.length).toBe(6);
    }
  }));

  it('addMessage to an unexist section - expect no change', ( async () => {
    expect(SECTIONS[2].message.length).toBe(3);
    expect(MAINS[1].section[0].message.length).toBe(6);
    service.addMessage(MAINS[1], 4); {
    expect(MAINS[1].section[4]).toBeUndefined();
    expect(SECTIONS[2].message.length).toBe(3);
    }
  }));

  it('addLink - expect add by 1 each time', ( async () => {
    expect(MAINS[0].section[0].link).toBeNull();

    service.addLink(MAINS[0], 0); {
      expect(MAINS[0].section[0].link.length).toBe(1);
      expect(MAINS[0].section[0].link[0].id).toBe(803);
      expect(MAINS[MAINS.length - 1].id).toBe(803);
      expect(SECTIONS[0].link.length).toBe(1);
      expect(LINK.length).toBe(23);
    }
    service.addLink(MAINS[0], 0); {
      expect(MAINS[0].section[0].link.length).toBe(2);
      expect(MAINS[0].section[0].link[1].id).toBe(804);
      expect(MAINS[MAINS.length - 1].id).toBe(804);
      expect(SECTIONS[0].link.length).toBe(2);
      expect(SECTIONS[0].link[0].id).toBe(803);
      expect(SECTIONS[0].link[1].id).toBe(804);
      expect(LINK.length).toBe(24);
      }
  }));



 



  it('updateMessage to an unexist section - expect unchange', ( async () => {

    service.updateMessage(MAINS[1], 3, 1, 'Today is raining' ); {
    expect(MAINS[1].section[3]).toBeUndefined();

    }
  }));




});
