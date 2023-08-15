import './_Facilities.scss';
import Tag from '../Tag/Tag';
import { useTranslation } from 'react-i18next';

function Facilities({ items }) {
  const { t } = useTranslation();

  return (
    <div className='specifications'>
      <p className='title_s'>{t('property_details.Facilities')} :</p>
      <div className='tags'>
        {items?.central_air_conditioner && (
          <Tag
            title={`${items?.central_air_conditioner} Center AC`}
            background='var(--light-green, #EAF4EE)'
          />
        )}
        {items?.split_unit && (
          <Tag title={`${items?.split_unit} Split AC`} background='var(--light-green, #EAF4EE)' />
        )}
        {items?.window_air_conditioner && (
          <Tag
            title={`${items?.window_air_conditioner} Window AC`}
            background='var(--light-green, #EAF4EE)'
          />
        )}
        {items?.desert_cooler && (
          <Tag
            title={`${items?.desert_cooler} Desert AC`}
            background='var(--light-green, #EAF4EE)'
          />
        )}
        {items?.wood_stove && (
          <Tag title={`${items?.wood_stove} Wood Stove`} background='var(--light-green, #EAF4EE)' />
        )}
        {items?.ornamental_trees && (
          <Tag
            title={`${items?.ornamental_trees} ornamental trees`}
            background='var(--light-green, #EAF4EE)'
          />
        )}
        {items?.palm && (
          <Tag title={`${items?.palm} palm`} background='var(--light-green, #EAF4EE)' />
        )}
        {items?.fruitful_trees && (
          <Tag
            title={`${items?.fruitful_trees} fruitful trees`}
            background='var(--light-green, #EAF4EE)'
          />
        )}
        {items?.is_kitchen_sink_installed && (
          <Tag title={`installed kitchen`} background='var(--light-green, #EAF4EE)' />
        )}
        {items?.is_cabinet_installed && (
          <Tag title={`installed cabinet`} background='var(--light-green, #EAF4EE)' />
        )}
      </div>
    </div>
  );
}

export default Facilities;
