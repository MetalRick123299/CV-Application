import { v4 as uuidv4 } from 'uuid';

export let personalCV = {
  firstName: '',
  lastName: '',
  title: '',
  address: '',
  phone: '',
  email: '',
};

export let experienceCV = [
  {
    id: uuidv4(),
    position: '1',
    company: '1',
    city: '1',
    from: 0,
    to: 0,
  },
  {
    id: uuidv4(),
    position: '2',
    company: '2',
    city: '2',
    from: 0,
    to: 0,
  },
];

export let educationCV = [
  {
    id: uuidv4(),
    university: '',
    city: '',
    degree: '',
    from: 0,
    to: 0,
  },
  {
    id: uuidv4(),
    university: '',
    city: '',
    degree: '',
    from: 0,
    to: 0,
  },
];
