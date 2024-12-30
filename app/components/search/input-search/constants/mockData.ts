export const mockCollections = [
  {id: '1', name: 'Saka Dunbarton Trust Samplers'},
  {id: '2', name: 'Trinidad Santiago'},
  {id: '3', name: 'Caldwell Savages'},
  {id: '4', name: 'Sancho Panza'},
] as const;

export const mockPages = [
  {id: '1', title: "Saint Christopher's Gift"},
  {id: '2', title: 'Five Ways to Say Thanks with Cigars'},
  {id: '3', title: 'What Is a Drew Estate "Cigar Safari?"'},
  {id: '4', title: 'Five More Ways to Say Thanks with Cigars'},
] as const;

export const mockProducts = {
  search: [
    {
      id: '1',
      name: 'Lost and Found Pepper Cream Soda San Andres Torpedo',
      price: '$12.00',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Caldwell Lost and Found Pepper Cream Soda San Andres Robusto',
      price: '$11.00',
      image: 'https://via.placeholder.com/150',
    },
  ],
  recent: [
    {
      id: '3',
      name: 'Lost and Found Pepper Cream Soda San Andres Toro Extra',
      price: '$12.00',
      image: 'https://via.placeholder.com/150',
    },
  ],
  popular: [
    {
      id: '4',
      name: 'Lost and Found Pepper Cream Soda San Andres Toro Fino Largo',
      price: '$11.00',
      image: 'https://via.placeholder.com/150',
    },
  ],
} as const;
