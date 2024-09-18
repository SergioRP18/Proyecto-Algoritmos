interface DataUser {
    id: number;
    photo: "";
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
        photo: "",
        name: 'Pablo',
        username: 'LopezAgarrdio',
        email: 'Lopex@gmail.com',
        address: {
            birthdate: 24,
            region: 'Colombia'
        }

    },
];