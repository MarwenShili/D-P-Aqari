import './_RoomsAndOthers.scss';
import Tag from '../Tag/Tag';
import floor from '../../assets/icons/floor.svg';
import { useTranslation } from 'react-i18next';

function RoomsAndOthers({ items }) {
  const { t } = useTranslation();

  return (
    <div className='specifications'>
      <p className='title_s'>{t('property_details.Rooms_and_others')} :</p>
      <div className='tags'>
        {items?.number_of_rooms && (
          <Tag
            title={`${items?.number_of_rooms} total rooms`}
            background='#DBEAFE'
            color='626687'
          />
        )}
        {items?.grass_area && (
          <Tag title={`${items?.grass_area} Grass area`} background='#DBEAFE' color='626687' />
        )}
        {items?.bathrooms_full && (
          <Tag title={`${items?.bathrooms_full} Bathrooms`} background='#DBEAFE' color='626687' />
        )}
        {items?.halls && (
          <Tag title={`${items?.halls} Halls`} background='#DBEAFE' color='626687' />
        )}
        {items?.kitchen && (
          <Tag title={`${items?.kitchen} open kitchen`} background='#DBEAFE' color='626687' />
        )}
        {items?.bedrooms && (
          <Tag title={`${items?.bedrooms} bedrooms`} background='#DBEAFE' color='626687' />
        )}
        {items?.majles && (
          <Tag title={`${items?.majles} Majles`} background='#DBEAFE' color='626687' />
        )}
        {items?.extension && (
          <Tag title={`${items?.extension} extension`} background='#DBEAFE' color='626687' />
        )}
        {items?.driver_room && (
          <Tag title={`${items?.driver_room} Driver’s room`} background='#DBEAFE' color='626687' />
        )}
        {items?.maid_room && (
          <Tag title={`${items?.maid_room} maid’s room`} background='#DBEAFE' color='626687' />
        )}
        {items?.outdoor_patio && (
          <Tag
            title={`${items?.outdoor_patio} outdoor patio`}
            background='#DBEAFE'
            color='626687'
          />
        )}
        {items?.swimming_pool && (
          <Tag
            title={`${items?.swimming_pool} swimming pool`}
            background='#DBEAFE'
            color='626687'
          />
        )}
        {items?.car_park && (
          <Tag title={`${items?.car_park} outdoor car park`} background='#DBEAFE' color='626687' />
        )}
        {items?.football_stadium && (
          <Tag
            title={`${items?.football_stadium} football staduim`}
            background='#DBEAFE'
            color='626687'
          />
        )}
        {items?.fixed_caravan && (
          <Tag title={`${items?.fixed_caravan} caravan`} background='#DBEAFE' color='626687' />
        )}
        {items?.tent && <Tag title={`${items?.tent} tents`} background='#DBEAFE' color='626687' />}
        {items?.storeroom && (
          <Tag title={`${items?.storeroom} storeroom`} background='#DBEAFE' color='626687' />
        )}
        {items?.roof_apartment && (
          <Tag
            title={`${items?.roof_apartment} roof apartment`}
            background='#DBEAFE'
            color='626687'
          />
        )}
      </div>
    </div>
  );
}

export default RoomsAndOthers;
