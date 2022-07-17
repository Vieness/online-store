import {makeAutoObservable} from "mobx";
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Laptop', icon: <LaptopIcon/>},
      {id: 2, name: 'TV', icon: <TvIcon/>},
      {id: 3, name: 'Phone', icon: <PhoneIphoneIcon/>},
      {id: 4, name: 'Сonsole', icon: <SportsEsportsIcon/>}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Asus'},
      {id: 5, name: 'Acer'},
    ]
    this._devices = [
      {
        id: 1,
        name: 'iphone 10',
        price: 1000,
        rating: 5,
        img: 'https://randomwordgenerator.com/img/picture-generator/54e1d5444352ae14f1dc8460962e33791c3ad6e04e5074417c2a79dd9449cd_640.jpg'
      },
      {
        id: 2,
        name: 'iphone 10',
        price: 10300,
        rating: 5,
        img: 'https://randomwordgenerator.com/img/picture-generator/57e4d0404d5baf14f1dc8460962e33791c3ad6e04e5074417d2e72d3964ec7_640.jpg'
      },
      {
        id: 3,
        name: 'iphone 10',
        price: 12000,
        rating: 2,
        img: 'https://randomwordgenerator.com/img/picture-generator/51e3d5444a52b10ff3d8992cc12c30771037dbf85257714b752c7bd5904c_640.jpg'
      },
      {
        id: 4,
        name: 'iphone 10',
        price: 10500,
        rating: 3,
        img: 'https://randomwordgenerator.com/img/picture-generator/53e9dc464853b10ff3d8992cc12c30771037dbf85254794e732872d69545_640.jpg'
      },
    ]
    this._selectedType = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevice(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get device() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }
}