import { Link } from 'src/app/models/link';


export class LinkStorageService {
  private KEY_LINKS_STORE = 'links';

  links: Link[];

  constructor() {
    this.carregaDados();
  }

  adiciona(link: Link) {
    const links = this.links || [];
    links.push(link);
    localStorage.setItem(this.KEY_LINKS_STORE, JSON.stringify(links));
  }

  get(): Link[] {
    this.carregaDados();
    return this.links;
  }

  private carregaDados() {
    this.links = JSON.parse(localStorage.getItem(this.KEY_LINKS_STORE));
  }

}
