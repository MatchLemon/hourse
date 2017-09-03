import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'chao',
    password: 'abc123_',
    avatar: 'https://avatars0.githubusercontent.com/u/12583493?v=4&s=40',
    name: '安安'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
