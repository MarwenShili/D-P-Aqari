import "./_RoomsAndOthers.scss";
import Tag from "../Tag/Tag";
import floor from "../../assets/icons/floor.svg";
import { useTranslation } from "react-i18next";

function RoomsAndOthers({ items }) {
  const { t } = useTranslation();

  return (
    <div className="specifications">
      <p className="title_s">{t("property_details.Rooms_and_others")} :</p>
      <div className="tags">
        {Object.keys(items).map((key) => (
          <>
            {+items[key] > 0 && (
              <Tag
                title={t(`rooms.${key}`)}
                background="#DBEAFE"
                color="#626687"
                value={items[key]}
              />
            )}
          </>
        ))}

        {/* {+items?.number_of_rooms > 0 && (
          <Tag
            title={` total rooms`}
            background="#DBEAFE"
            color="#626687"
            value={items?.number_of_rooms}
          />
        )}
        {+items?.bathrooms > 0 && (
          <Tag
            title={`${items?.bathrooms} bath rooms`}
            background="#DBEAFE"
            color="#626687"
            value={items?.number_of_rooms}
          />
        )}
        {+items?.open_kitchen > 0 && (
          <Tag
            title={`${items?.open_kitchen} open kitchen`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.saperate_kitchen > 0 && (
          <Tag
            title={`${items?.saperate_kitchen} separate kitchen`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.grass_area > 0 && (
          <Tag
            title={`${items?.grass_area}M Grass area`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.bathrooms_full > 0 && (
          <Tag
            title={`${items?.bathrooms_full} Bathrooms`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.halls > 0 && (
          <Tag
            title={`${items?.halls} Halls`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.kitchen > 0 && (
          <Tag
            title={`${items?.kitchen} open kitchen`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.bedrooms > 0 && (
          <Tag
            title={`${items?.bedrooms} bedrooms`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.majles > 0 && (
          <Tag
            title={`${items?.majles} Majles`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.extension > 0 && (
          <Tag
            title={`${items?.extension} extension`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.driver_room > 0 && (
          <Tag
            title={`${items?.driver_room} Driver’s room`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.maid_room > 0 && (
          <Tag
            title={`${items?.maid_room} maid’s room`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.outdoor_patio > 0 && (
          <Tag
            title={`${items?.outdoor_patio} outdoor patio`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.swimming_pool > 0 && (
          <Tag
            title={`${items?.swimming_pool} swimming pool`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.car_park > 0 && (
          <Tag
            title={`${items?.car_park} outdoor car park`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.football_stadium > 0 && (
          <Tag
            title={`${items?.football_stadium} football staduim`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.fixed_caravan > 0 && (
          <Tag
            title={`${items?.fixed_caravan} caravan`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.tent > 0 && (
          <Tag
            title={`${items?.tent} tents`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.storeroom > 0 && (
          <Tag
            title={`${items?.storeroom} storeroom`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.roof_apartment > 0 && (
          <Tag
            title={`${items?.roof_apartment} roof apartment`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.frontyard > 0 && (
          <Tag
            title={`${items?.frontyard} front yard`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.sideyard > 0 && (
          <Tag
            title={`${items?.sideyard} M  side yard`}
            background="#DBEAFE"
            color="#626687"
          />
        )}
        {+items?.backyard > 0 && (
          <Tag
            title={`${items?.backyard} M  back yard`}
            background="#DBEAFE"
            color="#626687"
          />
        )} */}
      </div>
    </div>
  );
}

export default RoomsAndOthers;
