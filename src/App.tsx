import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import local components
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { InterfaceFilter } from './interface/common.interface';
import HouseList from './components/HouseList';

const defaultFilter = {
  tinhThanh: '',
  quanHuyen: '',
  giaCa: '',
  dienTich: '',
};

function App() {
  const [filterValue, setFilterValue] =
    useState<InterfaceFilter>(defaultFilter);

  return (
    <main className="container px-5">
      <header className="App-header">
        <h1 className="text-danger fw-semibold fs-3 py-2">A.IDEA Việt Nam</h1>
      </header>
      <SearchBar setFilterValue={setFilterValue} />
      <HouseList filterValue={filterValue} />
    </main>
  );
}

export default App;
