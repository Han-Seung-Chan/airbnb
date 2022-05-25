import GroupOne from './GroupOne';
import GroupTwo from './GroupTwo';
import { cityData } from 'assets/data/cityData';
import { tripData } from 'assets/data/tripData';

const title = {
  cityTitle: '가까운 여행지 둘러보기',
  tripTitle: '어디서나, 여행은 살아보는 거야!',
};

function Main() {
  return (
    <main>
      <GroupOne title={title.cityTitle} data={cityData} />
      <GroupTwo title={title.tripTitle} data={tripData} />
    </main>
  );
}

export default Main;
