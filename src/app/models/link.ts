import * as firebase from 'firebase';

export class Link {
  url: string;
  dateAdd: firebase.firestore.Timestamp;
  dateRead?: firebase.firestore.Timestamp;
  name?: string;
  favorite = false;
}

export function fromURL(url): Link {
  const link = new Link();
  link.dateAdd = firebase.firestore.Timestamp.fromDate(new Date());
  link.url = url;
  return link;
}

export function toObject(link: Link): object {
  return {...link};
}
