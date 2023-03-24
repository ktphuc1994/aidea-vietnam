import { memo, ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react';

// import data
import tinhThanhList from '../data/tinh_tp.json';
import quanHuyenData from '../data/quan_huyen.json';
import { InterfaceSearchBar } from '../interface/comps-common';

const SearchBar = memo(({ setFilterValue }: InterfaceSearchBar) => {
  const [tinhThanhValue, setTinhThanhValue] = useState<string>('');
  const quanHuyenRef = useRef<string>('');
  const giaCaRef = useRef<string>('');
  const dienTichRef = useRef<string>('');

  const quanHuyenList = useMemo(
    () =>
      Object.entries(quanHuyenData).filter(
        ([key, quanHuyen]) => quanHuyen.parent_code === tinhThanhValue
      ),
    [tinhThanhValue]
  );

  const handleSelectTinhThanh = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      setTinhThanhValue('');
      quanHuyenRef.current = '';
      return;
    }
    setTinhThanhValue(e.target.value);
  };
  const handleSelectQuanHuyen = (e: ChangeEvent<HTMLSelectElement>) => {
    quanHuyenRef.current = e.target.value;
  };
  const handleSelectGiaCa = (e: ChangeEvent<HTMLSelectElement>) => {
    giaCaRef.current = e.target.value;
  };
  const handleSelectDienTich = (e: ChangeEvent<HTMLSelectElement>) => {
    dienTichRef.current = e.target.value;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilterValue({
      tinhThanh: tinhThanhValue,
      quanHuyen: quanHuyenRef.current,
      giaCa: giaCaRef.current,
      dienTich: dienTichRef.current,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-end">
        <div className="me-3">
          <label htmlFor="tinh-thanh" className="form-label">
            Tỉnh thành
          </label>
          <select
            className="form-select"
            id="tinh-thanh"
            name="tinhThanh"
            onChange={handleSelectTinhThanh}
          >
            <option value="" selected>
              --Tỉnh/Thành phố--
            </option>
            {Object.entries(tinhThanhList).map(([key, tinhThanh]) => (
              <option key={tinhThanh.slug} value={tinhThanh.code}>
                {tinhThanh.name}
              </option>
            ))}
          </select>
        </div>
        <div className="me-3">
          <label htmlFor="quan-huyen" className="form-label">
            Quận huyện
          </label>
          <select
            className="form-select"
            id="quan-huyen"
            name="quanHuyen"
            onChange={handleSelectQuanHuyen}
          >
            <option value="" selected>
              --Quận huyện--
            </option>
            {quanHuyenList.map(([key, quanHuyen]) => (
              <option key={quanHuyen.slug} value={quanHuyen.code}>
                {quanHuyen.name}
              </option>
            ))}
          </select>
        </div>
        <div className="me-3">
          <label htmlFor="gia-ca" className="form-label">
            Giá cả
          </label>
          <select
            className="form-select"
            id="gia-ca"
            name="giaCa"
            onChange={handleSelectGiaCa}
          >
            <option value="" selected>
              --Giá cả--
            </option>
            <option value="range1">Dưới 1 triệu</option>
            <option value="range2">1 triệu - 2 triệu</option>
            <option value="range3">2 triệu - 3 triệu</option>
            <option value="range4">3 triệu - 5 triệu</option>
            <option value="range5">5 triệu - 7 triệu</option>
            <option value="range6">Trên 7 triệu</option>
          </select>
        </div>
        <div className="me-3">
          <label htmlFor="dien-tich" className="form-label">
            Diện tích
          </label>
          <select
            className="form-select"
            id="dien-tich"
            name="dienTich"
            onChange={handleSelectDienTich}
          >
            <option value="" selected>
              --Diện tích--
            </option>
            <option value="area1">Dưới 20 m2</option>
            <option value="area2">20 m2 - 30 m2</option>
            <option value="area3">30 m2 - 50 m2</option>
            <option value="area4">50 m2 - 60 m2</option>
            <option value="area5">60 m2 - 70 m2</option>
            <option value="area6">Trên 70 m2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
});

export default SearchBar;
