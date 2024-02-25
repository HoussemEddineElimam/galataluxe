import Link from 'next/link';
import Image from 'next/image';
const InstagramReels = () => {
  const reels = [
    { id: 1, link: 'https://www.instagram.com/reel/CpDjII1owQc/', thumbnail: '/images/thumbnail1.png' },
    { id: 2, link: 'https://www.instagram.com/reel/Cm69txtBHNt/', thumbnail: '/images/thumbnail2.png' },
    { id: 3, link: 'https://www.instagram.com/reel/CMfc0cplbGr/', thumbnail: '/images/thumbnail3.png' },
    { id: 4, link: 'https://www.instagram.com/reel/Ciu6GkBIo3Y/', thumbnail: '/images/thumbnail4.png' },
    
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {reels.map((reel) => (
        <Link key={reel.id} href={reel.link} passHref>
          <span target="_blank" rel="noopener noreferrer" className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
              <Image src={reel.thumbnail}  alt={`Reel ${reel.id}`} width={170} height={285} objectFit='cover'/>
            </div>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default InstagramReels;