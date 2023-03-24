import { InterfaceHouseList } from '../interface/comps-common';

// import data
import houseData from '../data/data.json';
import quanHuyenData from '../data/quan_huyen.json';

import { InterfaceQuanHuyenList } from '../interface/address.interface';
import { areaRange, priceRange } from '../constants/common.const';

const HouseList = ({ filterValue }: InterfaceHouseList) => {
  const quanHuyen: InterfaceQuanHuyenList = quanHuyenData;
  const houseList = houseData.filter((house) => {
    const isCity = filterValue.tinhThanh
      ? filterValue.tinhThanh === house.city
      : true;
    const isDistrict = filterValue.quanHuyen
      ? filterValue.quanHuyen === house.district
      : true;
    const isPrice = filterValue.giaCa
      ? priceRange[filterValue.giaCa].min <= house.price &&
        priceRange[filterValue.giaCa].max >= house.price
      : true;
    const isArea = filterValue.dienTich
      ? areaRange[filterValue.dienTich].min <= house.area &&
        areaRange[filterValue.dienTich].max >= house.area
      : true;
    return isCity && isDistrict && isPrice && isArea;
  });
  return houseList.length === 0 ? (
    <div className="my-4">No matching house founded.</div>
  ) : (
    <div className="my-4 border-2 border-start border-end border-bottom border-danger">
      {houseList.map((house, index) => (
        <div
          className="d-flex p-2 border-top border-2 border-danger"
          key={index + 'house' + house.city}
        >
          <div className="flex-shrink-0 me-2">
            <img
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              src={house.thumbnail}
              alt="image-house"
            />
          </div>
          <div className="flex-grow-1">
            <p className="fs-5 text-danger">{house.title}</p>
            <p className="text-success fw-bold">
              {house.price / 1000000} triệu/tháng
            </p>
            <p>
              Diện tịch:{' '}
              <span className="fw-semibold me-2">
                {house.area}m<sup>2</sup>
              </span>
              Khu vực:{' '}
              <span className="text-primary fw-semibold">
                {quanHuyen[house.district].path_with_type}
              </span>
            </p>
            <p>{house.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
