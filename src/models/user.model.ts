import faker from 'faker/locale/es_MX'
import { Gender } from './types/gender';
import { User } from './types/user';
export const randomGender = () => {
    return faker.random.arrayElement([Gender.Male, Gender.Female])
}

export const randomUser = () => {
    const gender = randomGender();
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const alias = faker.internet.userName(firstName, lastName);

    const user: User = {
        gender,
        alias,
        firstName,
        lastName
    };
    return user;
}