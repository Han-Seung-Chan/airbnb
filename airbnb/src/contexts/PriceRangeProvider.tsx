import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';

interface UserPriceChoiceInterface {
  userChoice: { minPrice: number; maxPrice: number };
  setUserChoice: Dispatch<
    SetStateAction<{ minPrice: number; maxPrice: number }>
  >;
}

export const UserInputPriceResultContext =
  createContext<UserPriceChoiceInterface | null>(null);

function UserPriceResultProvider({ children }: { children: React.ReactNode }) {
  const [userChoice, setUserChoice] = useState<
    UserPriceChoiceInterface['userChoice']
  >({ minPrice: 0, maxPrice: 100 });

  const setterForUserChoice: UserPriceChoiceInterface['setUserChoice'] = (
    value,
  ) => {
    setUserChoice(value);
  };

  return (
    <>
      <UserInputPriceResultContext.Provider
        value={{ userChoice, setUserChoice }}
      >
        {children}
      </UserInputPriceResultContext.Provider>
    </>
  );
}

export default UserPriceResultProvider;
