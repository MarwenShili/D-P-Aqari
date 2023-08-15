import './_Specifications.scss';
import Tag from '../../components/Tag/Tag';
import { useTranslation } from 'react-i18next';

import I1 from '../../assets/specifications/1.svg';
import I2 from '../../assets/specifications/2.svg';
import I3 from '../../assets/specifications/3.svg';
import I4 from '../../assets/specifications/4.svg';
import I5 from '../../assets/specifications/5.svg';
import I6 from '../../assets/specifications/6.svg';
import I7 from '../../assets/specifications/7.svg';
import I8 from '../../assets/specifications/8.svg';
import I9 from '../../assets/specifications/9.svg';
import I10 from '../../assets/specifications/10.svg';
import I11 from '../../assets/specifications/11.svg';
import I12 from '../../assets/specifications/12.svg';

function Specifications({ items }) {
  const { t } = useTranslation();

  return (
    <div className='specifications'>
      <p className='title_s'>{t('property_details.Specifications')} :</p>
      <div className='tags'>
        {items?.total_floors && (
          <Tag title={`${items?.total_floors} Floors`} background='1b1c57' icon={I1} />
        )}
        {items?.unit_area && (
          <Tag title={`area ${items?.unit_area} meter square`} background='1b1c57' icon={I2} />
        )}
        {items?.unit_width && (
          <Tag title={`Width ${items?.unit_width} M`} background='1b1c57' icon={I3} />
        )}
        {items?.unit_length && (
          <Tag title={`Length ${items?.unit_length} M`} background='1b1c57' icon={I4} />
        )}
        {items?.unit_height && (
          <Tag title={`height ${items?.unit_height} M`} background='1b1c57' icon={I5} />
        )}
        {items?.unit_direction && (
          <Tag title={`${items?.unit_direction}`} background='1b1c57' icon={I6} />
        )}
        {items?.furnished_type && (
          <Tag title={`${items?.furnished_type}`} background='1b1c57' icon={I7} />
        )}
        {items?.include_mezzanine && <Tag title={`mezzanine`} background='1b1c57' icon={I8} />}
        {items?.unit_finishing && (
          <Tag title={`${items?.unit_finishing}`} background='1b1c57' icon={I9} />
        )}
        {items?.sea_view && <Tag title={`Sea view`} background='1b1c57' icon={I10} />}
        {items?.unit_usage && <Tag title={`${items?.unit_usage}`} background='1b1c57' icon={I11} />}
        {items?.entrance && <Tag title={`${items?.entrance}`} background='1b1c57' icon={I12} />}
      </div>
    </div>
  );
}

export default Specifications;
