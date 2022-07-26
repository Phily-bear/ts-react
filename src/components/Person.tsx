import { FC, useState } from 'react';
import { HairColor } from '../Enums';
export interface Props {
  name?: string;
  age?: number;
  email?: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder="Write down your country..." onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  );
};
