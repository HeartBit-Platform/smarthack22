'use client';

import  { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react';
import Pagina  from "../components/Pagina";

function Lista() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));
      setSuggestions(suggestions);
    }, []);
   return(
   <div>
     <div className="flex-col p-6 bg-white border-blue-300 border rounded-sm  ">
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    </div>
   </div>
   
   )

}
export default Lista