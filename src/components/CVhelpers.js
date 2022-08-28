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
    position: '',
    company: '',
    city: '',
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
];

export const experienceSingle = {
  id: uuidv4(),
  position: '',
  company: '',
  city: '',
  from: 0,
  to: 0,
};

export const educationSingle = {
  id: uuidv4(),
  university: '',
  city: '',
  degree: '',
  from: 0,
  to: 0,
};
