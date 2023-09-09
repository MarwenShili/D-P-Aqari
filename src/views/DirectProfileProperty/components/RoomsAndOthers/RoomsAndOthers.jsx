import "./_RoomsAndOthers.scss";
import Tag from "../Tag/Tag";
import floor from "../../assets/icons/floor.svg";
import { useTranslation } from "react-i18next";
import { allValuesFalsy } from "../../../../helpers/allValuesFalsy";

function RoomsAndOthers({ items }) {
  const { t } = useTranslation();
  // console.log(allValuesFalsy(items));
  if (allValuesFalsy(items)) {
    return null;
  }

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
            title={t(`rooms.number_of_rooms`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.number_of_rooms}
          />
        )}
        {+items?.bathrooms > 0 && (
          <Tag
            title={t(`rooms.bathrooms`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.bathrooms}
          />
        )}
        {+items?.open_kitchen > 0 && (
          <Tag
            title={t(`rooms.open_kitchen`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.open_kitchen}
          />
        )}
        {+items?.storeroom > 0 && (
          <Tag
            title={t(`rooms.storeroom`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.storeroom}
          />
        )}
        {+items?.extension > 0 && (
          <Tag
            title={t(`rooms.extension`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.extension}
          />
        )}
        {+items?.maid_room > 0 && (
          <Tag
            title={t(`rooms.maid_room`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.maid_room}
          />
        )}
        {+items?.frontyard > 0 && (
          <Tag
            title={t(`rooms.frontyard`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.frontyard}
          />
        )}
        {+items?.sideyard > 0 && (
          <Tag
            title={t(`rooms.sideyard`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.sideyard}
          />
        )}
        {+items?.car_park > 0 && (
          <Tag
            title={t(`rooms.car_park`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.car_park}
          />
        )}
        {+items?.saperate_kitchen > 0 && (
          <Tag
            title={t(`rooms.saperate_kitchen`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.saperate_kitchen}
          />
        )}
        {+items?.grass_area > 0 && (
          <Tag
            title={t(`rooms.grass_area`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.saperate_kitchen}
          />
        )}
        {+items?.bathrooms_full > 0 && (
          <Tag
            title={t(`rooms.bathrooms_full`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.bathrooms_full}
          />
        )}
        {+items?.halls > 0 && (
          <Tag
            title={t(`rooms.halls`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.halls}
          />
        )}
        {+items?.kitchen > 0 && (
          <Tag
            title={t(`rooms.kitchen`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.kitchen}
          />
        )}
        {+items?.bedrooms > 0 && (
          <Tag
            title={t(`rooms.bedrooms`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.bedrooms}
          />
        )}
        {+items?.majles > 0 && (
          <Tag
            title={t(`rooms.majles`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.majles}
          />
        )}

        {+items?.driver_room > 0 && (
          <Tag
            title={t(`rooms.driver_room`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.driver_room}
          />
        )}

        {+items?.outdoor_patio > 0 && (
          <Tag
            title={t(`rooms.outdoor_patio`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.outdoor_patio}
          />
        )}
        {+items?.swimming_pool > 0 && (
          <Tag
            title={t(`rooms.swimming_pool`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.swimming_pool}
          />
        )}

        {+items?.football_stadium > 0 && (
          <Tag
            title={t(`rooms.football_stadium`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.football_stadium}
          />
        )}
        {+items?.fixed_caravan > 0 && (
          <Tag
            title={t(`rooms.fixed_caravan`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.fixed_caravan}
          />
        )}
        {+items?.tent > 0 && (
          <Tag
            title={t(`rooms.tent`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.tent}
          />
        )}

        {+items?.roof_apartment > 0 && (
          <Tag
            title={t(`rooms.roof_apartment`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.roof_apartment}
          />
        )}

        {+items?.backyard > 0 && (
          <Tag
            title={t(`rooms.backyard`)}
            background="#DBEAFE"
            color="#626687"
            value={items?.backyard}
          />
        )} */}
      </div>
    </div>
  );
}

export default RoomsAndOthers;
