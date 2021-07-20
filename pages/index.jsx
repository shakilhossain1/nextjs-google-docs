import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';
import tw from 'twin.macro';
import Header from '../components/Header';
import { getSession, useSession } from 'next-auth/client';
import Login from '../components/Login';

const MiddleSection = tw.section`bg-[#F8F9FA] pb-10 px-10`;
const Container = tw.div`max-w-3xl mx-auto`;
const PlusImage = tw.div`relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700`;
const BlankText = tw.p`ml-2 mt-2 font-semibold text-gray-700 text-sm`;
const DocsContainer = tw(Container)`text-sm text-gray-700 py-8`;
const DocsSection = tw.section`bg-white px-10 md:px-0`;
const DocsHeader = tw.div`flex items-center justify-between`;
const CreateDocHeader = tw.div`flex items-center justify-between py-6`;

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Header />
      <MiddleSection>
        <Container>
          <CreateDocHeader>
            <h2 className="text-gray-700 text-lg">Start a new Document</h2>
            <Button
              color="gray"
              buttonType="outline"
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </CreateDocHeader>
          <div>
            <PlusImage>
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </PlusImage>
            <BlankText>Blank</BlankText>
          </div>
        </Container>
      </MiddleSection>
      <DocsSection>
        <DocsContainer>
          <DocsHeader>
            <h2 className="flex-grow font-medium">My Documents</h2>
            <p className="mr-5">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </DocsHeader>
        </DocsContainer>
      </DocsSection>
    </div>
  );
}
