import type { GetStaticProps } from 'next'
import axios from 'axios';
import { Card } from '../components/Card';
import { SimpleGrid, Heading } from '@chakra-ui/react';

type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state: string;
  county_province?: string;
  postal_code: string;
  longitude: string;
  latitude: string;
  country: string;
  phone: string;
  website_url: string;
  created_at: string;
  updated_at: string;
}

type HomeProps = {
  breweries: Brewery[];
}

export default function Home({ breweries }: HomeProps) {
  return (
    <>
      <Heading align="center" p='8'> Top 20 Breweries </Heading>
      <SimpleGrid minChildWidth='350px' spacing='20px' p='8' >
        {breweries.map(brewery => {
          return (
            <Card key={brewery.id} brewery={brewery} />
          )
        })}
      </SimpleGrid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://api.openbrewerydb.org/breweries');
  const breweries = res.data;
  return {
    props: {
      breweries
    },
    revalidate: 60 * 60 * 24 //24hours
  }
}
