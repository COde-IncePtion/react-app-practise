// Arrow characters to use: ▼ ▶ •

const backendData = [
  {
    id: '1',
    name: 'Office Map'
  },
  {
    id: '2',
    name: 'New Employee Onboarding',
    children: [
      {
        id: '8',
        name: 'Onboarding Materials'
      },
      {
        id: '9',
        name: 'Training'
      }
    ]
  },
  {
    id: '3',
    name: 'Office Events',
    children: [
      {
        id: '6',
        name: 'Winter is Coming',
        children: [
          {
            id: '10',
            name: 'Summer Picnic'
          },
          {
            id: '11',
            name: "Valentine's Day Party"
          },
          {
            id: '12',
            name: "New Year's Party",
            children: [{ id: '14455', name: 'Ashish is the author' }]
          }
        ]
      },
      {
        id: '7',
        name: '2017',
        children: [
          {
            id: '13',
            name: 'Company Anniversary Celebration'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Public Holidays'
  },
  {
    id: '5',
    name: 'Vacations and Sick Leaves'
  }
]

export { backendData }

export default function fetchData() {
  return new Promise(resolve => {
    setTimeout(resolve, 100, backendData)
  })
}
