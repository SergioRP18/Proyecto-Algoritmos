interface DataUser {
    id: number;
    photo: string;
    name: string;
    username: string;
    email: string;
    address: {
        birthdate: number;
        region: string;
    }
}

export const data: DataUser[] = [
    {
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/primer-plano-mapa-explotacion-turistica-masculina-su-mano_23-2147841551.jpg?t=st=1726983746~exp=1726987346~hmac=0118c246b10b5609449997c1aa25e784c49dccb69dffd0f253675f4c414c74c1&w=1060",
        name: 'Pablo',
        username: 'LopezAgarrdio',
        email: 'Lopex@gmail.com',
        address: {
            birthdate: 24,
            region: 'Colombia'
        }
    },
];