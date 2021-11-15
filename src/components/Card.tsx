import { Box, Heading, Text, Divider, HStack, Icon, Link, Badge } from "@chakra-ui/react";
import { FiLink, FiMapPin, FiPhone } from 'react-icons/fi'
import NumberFormat from "react-number-format";
type CardProps = {
  brewery: {
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
}

export function Card({ brewery }: CardProps) {
  return (
    <Box color='white' bg='gray.900' boxShadow='base' rounded='md' p='4'>
      <Heading fontSize="20" isTruncated > {brewery.name} </Heading>
      <HStack mt='4'>
        <Badge borderRadius='full' px='2' > {brewery.brewery_type} </Badge>
        <Badge borderRadius='full' px='2' > {brewery.country} </Badge>
      </HStack>
      < Divider my='4' />
      <HStack>
        <Icon as={FiMapPin} />
        <Text color='gray.500'> {brewery.city}, {brewery.state}, {brewery.postal_code} </Text>
      </HStack>
      {brewery.phone && (
        <HStack>
          <Icon as={FiPhone} />
          <Text color='gray.500'>
            <NumberFormat
              displayType='text'
              type='tel' value={brewery.phone}
              format='(##) #### ####'
            />
          </Text>
        </HStack>
      )}
      {brewery.website_url && (
        <HStack>
          <Icon as={FiLink} />
          <Link target='_blank' color='gray.500' href={brewery.website_url}> {brewery.website_url} </Link>
        </HStack>
      )}
    </Box>
  )
}
