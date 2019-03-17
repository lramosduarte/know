import { Link } from 'src/app/models/link'


export const LINKS: Link[] = [
    {
        url: 'http://www.google.com.br',
        name: 'Google',
        dateRead: null,
        dateAdd: new Date(),
        favorite: false,
    },
    {
        url: 'http://www.facebook.com.br',
        name: 'Facebook',
        dateAdd: new Date(),
        favorite: false,
    },
    {
        url: 'http://www.google.com.br/novidades',
        name: 'Google Novidades',
        dateRead: new Date(),
        dateAdd: new Date(),
        favorite: true,
    },
    {
        url: 'http://www.medium.com.br',
        dateRead: null,
        dateAdd: new Date(),
        favorite: false,
    },
]
