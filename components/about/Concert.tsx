import guitar from '@/public/image/about/guitar.svg';
import concert1 from '@/public/image/about/concert1.avif';
import concert2 from '@/public/image/about/concert2.avif';
import concert3 from '@/public/image/about/concert3.avif';
import Card from './Card';
import ImageBox from './ImageBox';

const Concert = () => {
  return (
    <section className="pad:mt-[200px] ph:mt-[104px] flex">
      {/* pad */}
      <div className="mr-[21px] dt:hidden pad:grid ph:hidden gap-y-[28px]">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={concert1}
          altText="concert1"
        />
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[470px] pad:h-[466px]"
          imageSrc={concert3}
          altText="concert3"
        />
      </div>
      <div className="pad:flex-col pad:grid gap-y-6 ph:hidden">
        <Card
          bgColor="bg-danger-40"
          title1="정기 공연"
          title2="및 각종 행사"
          width="pad:w-[321px] ph:w-64"
          height="pad:h-[189px] ph:h-[168px]"
          descriptions={{
            default: [
              '밴드의 꽃은 바로 공연! 깔루아는 매년 3월과',
              '9월 정기 공연을 열고 있습니다.',
              '이 외에도 학교 축제, 학과 축제 등 무대만 있다',
              '면 달려가 다양한 공연을 하고 있습니다.',
              '공연 전 한두 달간 수십번의 합주를 하며 팀워',
              '크를 다지고, 공연 직전에는 런스루와 리허설',
              '도 합니다.',
            ],
            phone: [
              '밴드의 꽃은 바로 공연! 깔루아는 매년',
              '3월과 9월 정기 공연을 열고 있습니다.',
              '이 외에도 학교 축제, 학과 축제 등 무대만',
              '있다면 달려가 공연을 하고 있습니다.',
              '공연 전 한두 달간 수십번의 합주를 하며',
              '팀워크를 다지고, 공연 직전에는 런스루와',
              '리허설도 합니다.',
            ],
          }}
          imageSrc={guitar}
          altText="concert"
        />
        <div className="dt:hidden pad:block ph:hidden">
          <ImageBox
            width="dt:w-[384px] pad:w-[381px]"
            height="dt:h-[223px] pad:h-[223px]"
            imageSrc={concert2}
            altText="concert2"
          />
        </div>
      </div>
      {/* dt */}
      <div className="ml-6 dt:grid gap-y-6 pad:hidden ph:hidden">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={concert1}
          altText="concert1"
        />
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[223px] pad:h-[223px]"
          imageSrc={concert2}
          altText="concert2"
        />
      </div>
      <div className="ml-6 dt:block pad:hidden ph:hidden">
        <ImageBox
          width="dt:w-[384px] pad:w-[381px]"
          height="dt:h-[470px] pad:h-[466px]"
          imageSrc={concert3}
          altText="concert3"
        />
      </div>
      {/* ph */}
      <div className="dt:hidden pad:hidden ph:flex gap-x-4 overflow-x-scroll scrollbar-hide">
        <div className="flex flex-nowrap mr-4">
          <Card
            bgColor="bg-danger-40"
            title1="정기 공연"
            title2="및 각종 행사"
            width="ph:w-64"
            height="ph:h-[168px]"
            descriptions={{
              default: [
                '밴드의 꽃은 바로 공연! 깔루아는 매년 3월과',
                '9월 정기 공연을 열고 있습니다.',
                '이 외에도 학교 축제, 학과 축제 등 무대만 있다',
                '면 달려가 다양한 공연을 하고 있습니다.',
                '공연 전 한두 달간 수십번의 합주를 하며 팀워',
                '크를 다지고, 공연 직전에는 런스루와 리허설',
                '도 합니다.',
              ],
              phone: [
                '밴드의 꽃은 바로 공연! 깔루아는 매년',
                '3월과 9월 정기 공연을 열고 있습니다.',
                '이 외에도 학교 축제, 학과 축제 등 무대만',
                '있다면 달려가 공연을 하고 있습니다.',
                '공연 전 한두 달간 수십번의 합주를 하며',
                '팀워크를 다지고, 공연 직전에는 런스루와',
                '리허설도 합니다.',
              ],
            }}
            imageSrc={guitar}
            altText="concert"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={concert1}
            altText="concert1"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={concert2}
            altText="concert2"
          />
          <ImageBox
            width="ph:w-[297px]"
            height="ph:h-[364px]"
            imageSrc={concert3}
            altText="concert3"
          />
        </div>
      </div>
    </section>
  );
};

export default Concert;
