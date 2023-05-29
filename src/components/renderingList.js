import React from 'react'

function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
}

export default function RenderingList() {

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];
      

    const chemists = people.filter(person =>
        person.profession === 'chemist'
      );
      const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
      );
  return (
    <div>
      <article>
      <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Rendering List</h3>
     
     <div className='px-5 bg-gradient-to-r from-gray-800'>
     <h4 className=' text-lg py-1 text-gray-400'>Scientists</h4>
      <h5 className=' text-base py-2 text-gray-400'>Chemists</h5>
      
      <ul className='flex gap-10'>
        {chemists.map(person =>
        
            <li key={person.id}>
            <img className=' rounded'
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
            </p>
            <p className='text-gray-500'>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        
        )}
      </ul>
      
      <h5 className=' text-base py-2 text-gray-400'>Everyone Else</h5>
      <ul className='flex gap-10'>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img className=' rounded'
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
            </p>
            <p className='text-gray-500'>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
     </div>

    </article>
  
    </div>
  )
}
