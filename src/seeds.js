import moment from 'moment';

const projects = [
	{
		dateReceived: moment().get().format('MM/DD/YYYY'),
		dateReturned: '',
		turnTime: '',
		segment: 'SIRX',
		account: 'Holzer',
		accountSub: 'Gallipolis',
		po: 'SIRX0001',
		location: 'Lab',
		manufacturer: 'Karl Storz',
		catalogNumber: '7220AA',
		serialNumber: '111231',
		description: '5mm 0Deg Laparoscope',
		notes: '',
		completed: false,
		invoice: '',
		id: 0
	},
	{
		dateReceived: moment().get().format('MM/DD/YYYY'),
		dateReturned: '',
		turnTime: '',
		segment: 'SIRX',
		account: 'Holzer',
		accountSub: 'Gallipolis',
		po: 'SIRX0002',
		location: 'Lab',
		manufacturer: 'ACMI',
		catalogNumber: 'M3-30A Gold',
		serialNumber: 'A33J231',
		description: '4mm 30Deg Cystoscope',
		notes: '',
		completed: false,
		invoice: '',
		id: 1
	},
	{
		dateReceived: moment().get().format('MM/DD/YYYY'),
		dateReturned: '',
		turnTime: '',
		segment: 'SIRX',
		account: 'Holzer',
		accountSub: 'Gallipolis',
		po: 'SIRX0003',
		location: 'Lab',
		manufacturer: 'Stryker',
		catalogNumber: '502-746-000',
		serialNumber: '1566102',
		description: '5mm 30Deg Laparoscope',
		notes: '',
		completed: false,
		invoice: '',
		id: 2
	},
	{
		dateReceived: moment().get().format('MM/DD/YYYY'),
		dateReturned: '',
		turnTime: '',
		segment: 'SIRX',
		account: 'Holzer',
		accountSub: 'Gallipolis',
		po: 'SIRX0004',
		location: 'Lab',
		manufacturer: 'Stryker',
		catalogNumber: '502-746-000',
		serialNumber: '1566102',
		description: '5mm 30Deg Laparoscope',
		notes: '',
		completed: false,
		invoice: '',
		id: 3
	}
];

export default projects;


