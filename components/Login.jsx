import Button from '@material-tailwind/react/Button';
import Image from 'next/image';
import tw from 'twin.macro';
import { signIn } from 'next-auth/client';

const Wrapper = tw.div`min-h-screen flex flex-col items-center justify-center`;

export default function Login() {
  return (
    <Wrapper>
      <Image
        src="https://links.papareact.com/lui"
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Sign In
      </Button>
    </Wrapper>
  );
}
