// Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект, 
// где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.


const getMenCountByYear = (arr) => {
    const newObj = arr.filter((item) => item.gender === 'male').reduce((acc, item) => {
      acc[item.birthday.slice(0, 4)] = (acc[item.birthday.slice(0, 4)] ?? 0) + 1;
  
      return acc;
    }, {})
  
    return newObj;
  }

  export default getMenCountByYear;

getMenCountByYear([
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
    { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
    { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
    { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
    { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
    { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
    { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
  ]);

// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };