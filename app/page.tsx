import Card from '@/components/card';
import Image from 'next/image';

export default async function Home() {
  const response = await fetch(
    'https://65d507f83f1ab8c634367939.mockapi.io/products'
  );
  const data = await response.json();

  // const cardItems = [
  //   {
  //     name: 'Samsung TV',
  //     imageUrl:
  //       'https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?q=80&w=4064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 3,
  //     description:
  //       'It is in perfect condition and working perfectly. 9 months old and still under warranty. No faults and scratches on the screen.model number : UA75RU7100W 2021 year model. Box available for easy transportation.',
  //   },
  //   {
  //     name: 'Samsung TV',
  //     imageUrl:
  //       'https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?q=80&w=4064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 3,
  //     description:
  //       'It is in perfect condition and working perfectly. 9 months old and still under warranty. No faults and scratches on the screen.model number : UA75RU7100W 2021 year model. Box available for easy transportation.',
  //   },
  // ];
  return (
    <main className="min-h-screen">
      <div className="px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.map((item, idx) => (
            <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
