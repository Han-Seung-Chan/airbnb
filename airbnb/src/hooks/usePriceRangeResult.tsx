import { useContext } from 'react';
import { UserInputPriceResultContext } from 'contexts/PriceRangeProvider';

export default function usePriceRangeResultHook() {
  const UserChoice = useContext(UserInputPriceResultContext);
  if (!UserChoice) throw new Error();

  return {
    minPrice: UserChoice.userChoice.minPrice,
    maxPrice: UserChoice.userChoice.maxPrice,
    setUserChoice: UserChoice.setUserChoice,
  };
}
