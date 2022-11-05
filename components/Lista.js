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
   
     <div className="flex-col bg-white border-baby-blue border rounded-sm max-h-[40rem] max-w-[21rem] overflow-y-scroll">
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    <Pagina key={faker.datatype.uuid()} avatar={faker.image.avatar()} username={faker.internet.userName()}  />
    </div>
   
   
   )

}
export default Lista