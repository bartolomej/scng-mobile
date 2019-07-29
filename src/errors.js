import React from 'react';
import LogoE from 'react-native-vector-icons/Entypo';
import LogoO from 'react-native-vector-icons/FontAwesome';

/**
 * parses error message and title
 * to user friendly message / graphic
 */
export default error => {
  switch (error.message) {
    case 'Network request failed':
      return {
        title: 'Woops napaka povezave',
        description: 'Preveri povezavo do interneta ali poskusi ponovno.',
        image: <LogoE name="network" size={120} color={'black'} />
      };
    case 'Network request failed':
      return {
        title: 'Napaka posiljanja',
        description: 'Preveri povezavo in poskusi ponovno posiljanje',
        image: <LogoO name="envelope-o" size={120} color={'black'} />
      };
    default:
      return {
        title: 'Woops neznana napaka',
        description: '',
        image: <LogoE name="message1" size={120} color={'black'} />
      }
  }
}