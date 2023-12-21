<template>
  <div class="home" v-if="show_city">
    <div class="rightMain" style="overflow: auto">


      <div class="title">Name of City</div>

      <div>
        <input type="text" v-model="keyWord" placeholder="search name here" class="search" style="margin-left: 30px">
      </div>
      <div class="cont">
        <ul>
          <li v-for="(item, index) in filterList" @click="cameraPos(item)">{{ item.name }}</li>
        </ul>
      </div>
      <div class="title">其他操作</div>
      <div class="cont">
        <ul>
          <li @click="rotationChange">{{ rotation }}</li>
          <li @click="columnChange">添加光柱</li>
        </ul>
        <div>
          <ul>
            <li @click="turndata">转换数据</li>
          </ul>
          <div v-if="showcol">{{colvalue}}</div>
        </div>
      </div>
    </div>
    <threeIndex ref="threeMapId"></threeIndex>
  </div>
</template>

<script>
import threeIndex from '../components/three/Index'

export default {
  name: 'HomeView',
  components: {
    threeIndex
  },
  computed: {
    filterList() {
      return this.objList.filter((item) => {
        return item.name.indexOf(this.keyWord) !== -1;
      })
    }
  },

  data() {
    return {
      showcol: false,
      colvalue:"max temperature : blue->red",
      keyWord: '',
      objList: [{'name': 'Abidjan', 'lon': -3.23, 'lat': 5.63, 'color': '#1FFBC6'}, {
        'name': 'Addis Abeba',
        'lon': 38.11,
        'lat': 8.84,
        'color': '#A41FE8'
      }, {'name': 'Ahmadabad', 'lon': 72.52, 'lat': 23.31, 'color': '#E8BB1F'}, {
        'name': 'Aleppo',
        'lon': 37.79,
        'lat': 36.17,
        'color': '#E81F56'
      }, {'name': 'Alexandria', 'lon': 30.16, 'lat': 31.35, 'color': '#1FFBC6'}, {
        'name': 'Ankara',
        'lon': 33.29,
        'lat': 39.38,
        'color': '#A41FE8'
      }, {'name': 'Baghdad', 'lon': 45.0, 'lat': 32.95, 'color': '#E8BB1F'}, {
        'name': 'Bangalore',
        'lon': 77.26,
        'lat': 12.05,
        'color': '#E81F56'
      }, {'name': 'Bangkok', 'lon': 99.91, 'lat': 13.66, 'color': '#1FFBC6'}, {
        'name': 'Belo Horizonte',
        'lon': -44.36,
        'lat': -20.09,
        'color': '#A41FE8'
      }, {'name': 'Berlin', 'lon': 13.14, 'lat': 52.24, 'color': '#E8BB1F'}, {
        'name': 'Bogotá',
        'lon': -74.73,
        'lat': 4.02,
        'color': '#E81F56'
      }, {'name': 'Bombay', 'lon': 72.68, 'lat': 18.48, 'color': '#1FFBC6'}, {
        'name': 'Brasília',
        'lon': -47.5,
        'lat': -15.27,
        'color': '#A41FE8'
      }, {'name': 'Cairo', 'lon': 31.38, 'lat': 29.74, 'color': '#E8BB1F'}, {
        'name': 'Calcutta',
        'lon': 88.25,
        'lat': 23.31,
        'color': '#E81F56'
      }, {'name': 'Cali', 'lon': -76.34, 'lat': 4.02, 'color': '#1FFBC6'}, {
        'name': 'Cape Town',
        'lon': 18.19,
        'lat': -32.95,
        'color': '#A41FE8'
      }, {'name': 'Casablanca', 'lon': -6.7, 'lat': 32.95, 'color': '#E8BB1F'}, {
        'name': 'Changchun',
        'lon': 125.22,
        'lat': 44.2,
        'color': '#E81F56'
      }, {'name': 'Chengdu', 'lon': 103.66, 'lat': 31.35, 'color': '#1FFBC6'}, {
        'name': 'Chicago',
        'lon': -87.27,
        'lat': 42.59,
        'color': '#A41FE8'
      }, {'name': 'Chongqing', 'lon': 107.08, 'lat': 29.74, 'color': '#E8BB1F'}, {
        'name': 'Dakar',
        'lon': -17.5,
        'lat': 15.27,
        'color': '#E81F56'
      }, {'name': 'Dalian', 'lon': 120.69, 'lat': 39.38, 'color': '#1FFBC6'}, {
        'name': 'Dar Es Salaam',
        'lon': 39.73,
        'lat': -7.23,
        'color': '#A41FE8'
      }, {'name': 'Delhi', 'lon': 77.27, 'lat': 28.13, 'color': '#E8BB1F'}, {
        'name': 'Dhaka',
        'lon': 90.0,
        'lat': 23.31,
        'color': '#E81F56'
      }, {'name': 'Durban', 'lon': 31.38, 'lat': -29.74, 'color': '#1FFBC6'}, {
        'name': 'Faisalabad',
        'lon': 73.51,
        'lat': 31.35,
        'color': '#A41FE8'
      }, {'name': 'Fortaleza', 'lon': -40.98, 'lat': -4.02, 'color': '#E8BB1F'}, {
        'name': 'Gizeh',
        'lon': 31.38,
        'lat': 29.74,
        'color': '#E81F56'
      }, {'name': 'Guangzhou', 'lon': 112.72, 'lat': 23.31, 'color': '#1FFBC6'}, {
        'name': 'Harare',
        'lon': 30.42,
        'lat': -18.48,
        'color': '#A41FE8'
      }, {'name': 'Harbin', 'lon': 125.77, 'lat': 45.81, 'color': '#E8BB1F'}, {
        'name': 'Ho Chi Minh City',
        'lon': 107.18,
        'lat': 10.45,
        'color': '#E81F56'
      }, {'name': 'Hyderabad', 'lon': 78.7, 'lat': 16.87, 'color': '#1FFBC6'}, {
        'name': 'Ibadan',
        'lon': 4.05,
        'lat': 7.23,
        'color': '#A41FE8'
      }, {'name': 'Istanbul', 'lon': 29.82, 'lat': 40.99, 'color': '#E8BB1F'}, {
        'name': 'Izmir',
        'lon': 26.44,
        'lat': 37.78,
        'color': '#E81F56'
      }, {'name': 'Jaipur', 'lon': 75.22, 'lat': 26.52, 'color': '#1FFBC6'}, {
        'name': 'Jakarta',
        'lon': 106.55,
        'lat': -5.63,
        'color': '#A41FE8'
      }, {'name': 'Jiddah', 'lon': 38.94, 'lat': 21.7, 'color': '#E8BB1F'}, {
        'name': 'Jinan',
        'lon': 117.35,
        'lat': 36.17,
        'color': '#E81F56'
      }, {'name': 'Kabul', 'lon': 70.05, 'lat': 34.56, 'color': '#1FFBC6'}, {
        'name': 'Kano',
        'lon': 8.22,
        'lat': 12.05,
        'color': '#A41FE8'
      }, {'name': 'Kanpur', 'lon': 80.6, 'lat': 26.52, 'color': '#E8BB1F'}, {
        'name': 'Karachi',
        'lon': 67.39,
        'lat': 24.92,
        'color': '#E81F56'
      }, {'name': 'Kiev', 'lon': 31.69, 'lat': 50.63, 'color': '#1FFBC6'}, {
        'name': 'Kinshasa',
        'lon': 15.27,
        'lat': -4.02,
        'color': '#A41FE8'
      }, {'name': 'Lagos', 'lon': 3.23, 'lat': 5.63, 'color': '#E8BB1F'}, {
        'name': 'Lahore',
        'lon': 73.51,
        'lat': 31.35,
        'color': '#E81F56'
      }, {'name': 'Lakhnau', 'lon': 80.6, 'lat': 26.52, 'color': '#1FFBC6'}, {
        'name': 'Lima',
        'lon': -77.26,
        'lat': -12.05,
        'color': '#A41FE8'
      }, {'name': 'London', 'lon': -0.0, 'lat': 52.24, 'color': '#E8BB1F'}, {
        'name': 'Los Angeles',
        'lon': -118.7,
        'lat': 34.56,
        'color': '#E81F56'
      }, {'name': 'Luanda', 'lon': 13.78, 'lat': -8.84, 'color': '#1FFBC6'}, {
        'name': 'Madras',
        'lon': 80.09,
        'lat': 13.66,
        'color': '#A41FE8'
      }, {'name': 'Madrid', 'lon': -4.26, 'lat': 40.99, 'color': '#E8BB1F'}, {
        'name': 'Manila',
        'lon': 120.83,
        'lat': 15.27,
        'color': '#E81F56'
      }, {'name': 'Mashhad', 'lon': 59.67, 'lat': 36.17, 'color': '#1FFBC6'}, {
        'name': 'Melbourne',
        'lon': 144.41,
        'lat': -37.78,
        'color': '#A41FE8'
      }, {'name': 'Mexico', 'lon': -98.96, 'lat': 20.09, 'color': '#E8BB1F'}, {
        'name': 'Mogadishu',
        'lon': 45.8,
        'lat': 2.41,
        'color': '#E81F56'
      }, {'name': 'Montreal', 'lon': -72.69, 'lat': 45.81, 'color': '#1FFBC6'}, {
        'name': 'Moscow',
        'lon': 36.85,
        'lat': 55.45,
        'color': '#A41FE8'
      }, {'name': 'Nagoya', 'lon': 136.22, 'lat': 34.56, 'color': '#E8BB1F'}, {
        'name': 'Nagpur',
        'lon': 78.75,
        'lat': 21.7,
        'color': '#E81F56'
      }, {'name': 'Nairobi', 'lon': 36.16, 'lat': -0.8, 'color': '#1FFBC6'}, {
        'name': 'Nanjing',
        'lon': 118.74,
        'lat': 31.35,
        'color': '#A41FE8'
      }, {'name': 'New Delhi', 'lon': 77.27, 'lat': 28.13, 'color': '#E8BB1F'}, {
        'name': 'New York',
        'lon': -74.56,
        'lat': 40.99,
        'color': '#E81F56'
      }, {'name': 'Paris', 'lon': 2.45, 'lat': 49.03, 'color': '#1FFBC6'}, {
        'name': 'Peking',
        'lon': 116.53,
        'lat': 39.38,
        'color': '#A41FE8'
      }, {'name': 'Pune', 'lon': 74.37, 'lat': 18.48, 'color': '#E8BB1F'}, {
        'name': 'Rangoon',
        'lon': 95.44,
        'lat': 16.87,
        'color': '#E81F56'
      }, {'name': 'Rio De Janeiro', 'lon': -42.82, 'lat': -23.31, 'color': '#1FFBC6'}, {
        'name': 'Riyadh',
        'lon': 46.11,
        'lat': 24.92,
        'color': '#A41FE8'
      }, {'name': 'Rome', 'lon': 13.09, 'lat': 42.59, 'color': '#E8BB1F'}, {
        'name': 'Saint Petersburg',
        'lon': 29.19,
        'lat': 60.27,
        'color': '#E81F56'
      }, {'name': 'Salvador', 'lon': -38.81, 'lat': -13.66, 'color': '#1FFBC6'}, {
        'name': 'Santiago',
        'lon': -69.89,
        'lat': -32.95,
        'color': '#A41FE8'
      }, {'name': 'Santo Domingo', 'lon': -69.3, 'lat': 18.48, 'color': '#E8BB1F'}, {
        'name': 'Seoul',
        'lon': 126.1,
        'lat': 37.78,
        'color': '#E81F56'
      }, {'name': 'Shanghai', 'lon': 120.63, 'lat': 31.35, 'color': '#1FFBC6'}, {
        'name': 'Shenyang',
        'lon': 123.55,
        'lat': 40.99,
        'color': '#A41FE8'
      }, {'name': 'Singapore', 'lon': 103.66, 'lat': 0.8, 'color': '#E8BB1F'}, {
        'name': 'Surabaya',
        'lon': 112.7,
        'lat': -7.23,
        'color': '#E81F56'
      }, {'name': 'Surat', 'lon': 73.56, 'lat': 21.7, 'color': '#1FFBC6'}, {
        'name': 'Sydney',
        'lon': 151.78,
        'lat': -34.56,
        'color': '#A41FE8'
      }, {'name': 'São Paulo', 'lon': -46.31, 'lat': -23.31, 'color': '#E8BB1F'}, {
        'name': 'Taipei',
        'lon': 122.36,
        'lat': 24.92,
        'color': '#E81F56'
      }, {'name': 'Taiyuan', 'lon': 111.86, 'lat': 37.78, 'color': '#1FFBC6'}, {
        'name': 'Tangshan',
        'lon': 113.9,
        'lat': 37.78,
        'color': '#A41FE8'
      }, {'name': 'Tianjin', 'lon': 116.53, 'lat': 39.38, 'color': '#E8BB1F'}, {
        'name': 'Tokyo',
        'lon': 139.23,
        'lat': 36.17,
        'color': '#E81F56'
      }, {'name': 'Toronto', 'lon': -80.5, 'lat': 44.2, 'color': '#1FFBC6'}, {
        'name': 'Umm Durman',
        'lon': 32.5,
        'lat': 15.27,
        'color': '#A41FE8'
      }, {'name': 'Wuhan', 'lon': 114.46, 'lat': 29.74, 'color': '#E8BB1F'}, {
        'name': 'Xian',
        'lon': 108.97,
        'lat': 34.56,
        'color': '#E81F56'
      }],
      objList_2: [{
        'name': 'Abidjan',
        'lon': -3.23,
        'lat': 5.63,
        'color_min': '#0bf300',
        'color_max': '#a75757'
      }, {
        'name': 'Addis Abeba',
        'lon': 38.11,
        'lat': 8.84,
        'color_min': '#32cc00',
        'color_max': '#4cb2b2'
      }, {
        'name': 'Ahmadabad',
        'lon': 72.52,
        'lat': 23.31,
        'color_min': '#27d700',
        'color_max': '#e11d1d'
      }, {
        'name': 'Aleppo',
        'lon': 37.79,
        'lat': 36.17,
        'color_min': '#768800',
        'color_max': '#c33b3b'
      }, {
        'name': 'Alexandria',
        'lon': 30.16,
        'lat': 31.35,
        'color_min': '#47b700',
        'color_max': '#9b6363'
      }, {
        'name': 'Ankara',
        'lon': 33.29,
        'lat': 39.38,
        'color_min': '#996500',
        'color_max': '#7e8080'
      }, {
        'name': 'Baghdad',
        'lon': 45.0,
        'lat': 32.95,
        'color_min': '#659900',
        'color_max': '#ff0000'
      }, {
        'name': 'Bangalore',
        'lon': 77.26,
        'lat': 12.05,
        'color_min': '#15e900',
        'color_max': '#a55959'
      }, {
        'name': 'Bangkok',
        'lon': 99.91,
        'lat': 13.66,
        'color_min': '#0df100',
        'color_max': '#b34b4b'
      }, {
        'name': 'Belo Horizonte',
        'lon': -44.36,
        'lat': -20.09,
        'color_min': '#2bd300',
        'color_max': '#768888'
      }, {
        'name': 'Berlin',
        'lon': 13.14,
        'lat': 52.24,
        'color_min': '#ac5200',
        'color_max': '#679797'
      }, {
        'name': 'Bogotá',
        'lon': -74.73,
        'lat': 4.02,
        'color_min': '#21dd00',
        'color_max': '#59a5a5'
      }, {
        'name': 'Bombay',
        'lon': 72.68,
        'lat': 18.48,
        'color_min': '#12ec00',
        'color_max': '#af4f4f'
      }, {
        'name': 'Brasília',
        'lon': -47.5,
        'lat': -15.27,
        'color_min': '#24da00',
        'color_max': '#7d8181'
      }, {
        'name': 'Cairo',
        'lon': 31.38,
        'lat': 29.74,
        'color_min': '#4cb200',
        'color_max': '#b04e4e'
      }, {
        'name': 'Calcutta',
        'lon': 88.25,
        'lat': 23.31,
        'color_min': '#2ed000',
        'color_max': '#c53939'
      }, {
        'name': 'Cali',
        'lon': -76.34,
        'lat': 4.02,
        'color_min': '#18e600',
        'color_max': '#6e9090'
      }, {
        'name': 'Cape Town',
        'lon': 18.19,
        'lat': -32.95,
        'color_min': '#48b600',
        'color_max': '#55a9a9'
      }, {
        'name': 'Casablanca',
        'lon': -6.7,
        'lat': 32.95,
        'color_min': '#5ca200',
        'color_max': '#956969'
      }, {
        'name': 'Changchun',
        'lon': 125.22,
        'lat': 44.2,
        'color_min': '#ed1100',
        'color_max': '#847a7a'
      }, {
        'name': 'Chengdu',
        'lon': 103.66,
        'lat': 31.35,
        'color_min': '#867800',
        'color_max': '#52acac'
      }, {
        'name': 'Chicago',
        'lon': -87.27,
        'lat': 42.59,
        'color_min': '#a45a00',
        'color_max': '#916d6d'
      }, {
        'name': 'Chongqing',
        'lon': 107.08,
        'lat': 29.74,
        'color_min': '#699500',
        'color_max': '#a55959'
      }, {
        'name': 'Dakar',
        'lon': -17.5,
        'lat': 15.27,
        'color_min': '#1de100',
        'color_max': '#a05e5e'
      }, {
        'name': 'Dalian',
        'lon': 120.69,
        'lat': 39.38,
        'color_min': '#a85600',
        'color_max': '#7d8181'
      }, {
        'name': 'Dar Es Salaam',
        'lon': 39.73,
        'lat': -7.23,
        'color_min': '#0bf300',
        'color_max': '#9f5f5f'
      }, {
        'name': 'Delhi',
        'lon': 77.27,
        'lat': 28.13,
        'color_min': '#41bd00',
        'color_max': '#ea1414'
      }, {
        'name': 'Dhaka',
        'lon': 90.0,
        'lat': 23.31,
        'color_min': '#2fcf00',
        'color_max': '#af4f4f'
      }, {
        'name': 'Durban',
        'lon': 31.38,
        'lat': -29.74,
        'color_min': '#2dd100',
        'color_max': '#758989'
      }, {
        'name': 'Faisalabad',
        'lon': 73.51,
        'lat': 31.35,
        'color_min': '#4bb300',
        'color_max': '#ea1414'
      }, {
        'name': 'Fortaleza',
        'lon': -40.98,
        'lat': -4.02,
        'color_min': '#01fd00',
        'color_max': '#a85656'
      }, {
        'name': 'Gizeh',
        'lon': 31.38,
        'lat': 29.74,
        'color_min': '#4cb200',
        'color_max': '#b04e4e'
      }, {
        'name': 'Guangzhou',
        'lon': 112.72,
        'lat': 23.31,
        'color_min': '#4eb000',
        'color_max': '#aa5454'
      }, {
        'name': 'Harare',
        'lon': 30.42,
        'lat': -18.48,
        'color_min': '#37c700',
        'color_max': '#7c8282'
      }, {
        'name': 'Harbin',
        'lon': 125.77,
        'lat': 45.81,
        'color_min': '#ffff00',
        'color_max': '#837b7b'
      }, {
        'name': 'Ho Chi Minh City',
        'lon': 107.18,
        'lat': 10.45,
        'color_min': '#08f600',
        'color_max': '#af4f4f'
      }, {
        'name': 'Hyderabad',
        'lon': 78.7,
        'lat': 16.87,
        'color_min': '#19e500',
        'color_max': '#d92525'
      }, {
        'name': 'Ibadan',
        'lon': 4.05,
        'lat': 7.23,
        'color_min': '#0df100',
        'color_max': '#ab5353'
      }, {
        'name': 'Istanbul',
        'lon': 29.82,
        'lat': 40.99,
        'color_min': '#7a8400',
        'color_max': '#887676'
      }, {
        'name': 'Izmir',
        'lon': 26.44,
        'lat': 37.78,
        'color_min': '#5ea000',
        'color_max': '#a65858'
      }, {
        'name': 'Jaipur',
        'lon': 75.22,
        'lat': 26.52,
        'color_min': '#3ac400',
        'color_max': '#ec1212'
      }, {
        'name': 'Jakarta',
        'lon': 106.55,
        'lat': -5.63,
        'color_min': '#00fe00',
        'color_max': '#9b6363'
      }, {
        'name': 'Jiddah',
        'lon': 38.94,
        'lat': 21.7,
        'color_min': '#19e500',
        'color_max': '#d52929'
      }, {
        'name': 'Jinan',
        'lon': 117.35,
        'lat': 36.17,
        'color_min': '#946a00',
        'color_max': '#976767'
      }, {'name': 'Kabul', 'lon': 70.05, 'lat': 34.56, 'color_min': '#847a00', 'color_max': '#8f6f6f'}, {
        'name': 'Kano',
        'lon': 8.22,
        'lat': 12.05,
        'color_min': '#1ee000',
        'color_max': '#c83636'
      }, {
        'name': 'Kanpur',
        'lon': 80.6,
        'lat': 26.52,
        'color_min': '#40be00',
        'color_max': '#e31b1b'
      }, {
        'name': 'Karachi',
        'lon': 67.39,
        'lat': 24.92,
        'color_min': '#31cd00',
        'color_max': '#ca3434'
      }, {
        'name': 'Kiev',
        'lon': 31.69,
        'lat': 50.63,
        'color_min': '#ca3400',
        'color_max': '#6f8f8f'
      }, {
        'name': 'Kinshasa',
        'lon': 15.27,
        'lat': -4.02,
        'color_min': '#15e900',
        'color_max': '#827c7c'
      }, {'name': 'Lagos', 'lon': 3.23, 'lat': 5.63, 'color_min': '#07f700', 'color_max': '#9e6060'}, {
        'name': 'Lahore',
        'lon': 73.51,
        'lat': 31.35,
        'color_min': '#4bb300',
        'color_max': '#ea1414'
      }, {
        'name': 'Lakhnau',
        'lon': 80.6,
        'lat': 26.52,
        'color_min': '#40be00',
        'color_max': '#e31b1b'
      }, {
        'name': 'Lima',
        'lon': -77.26,
        'lat': -12.05,
        'color_min': '#3ec000',
        'color_max': '#699595'
      }, {
        'name': 'London',
        'lon': -0.0,
        'lat': 52.24,
        'color_min': '#887600',
        'color_max': '#47b7b7'
      }, {
        'name': 'Los Angeles',
        'lon': -118.7,
        'lat': 34.56,
        'color_min': '#669800',
        'color_max': '#8c7272'
      }, {
        'name': 'Luanda',
        'lon': 13.78,
        'lat': -8.84,
        'color_min': '#1de100',
        'color_max': '#8b7373'
      }, {
        'name': 'Madras',
        'lon': 80.09,
        'lat': 13.66,
        'color_min': '#0fef00',
        'color_max': '#d82626'
      }, {
        'name': 'Madrid',
        'lon': -4.26,
        'lat': 40.99,
        'color_min': '#7e8000',
        'color_max': '#718d8d'
      }, {
        'name': 'Manila',
        'lon': 120.83,
        'lat': 15.27,
        'color_min': '#09f500',
        'color_max': '#aa5454'
      }, {
        'name': 'Mashhad',
        'lon': 59.67,
        'lat': 36.17,
        'color_min': '#a35b00',
        'color_max': '#8b7373'
      }, {
        'name': 'Melbourne',
        'lon': 144.41,
        'lat': -37.78,
        'color_min': '#59a500',
        'color_max': '#5f9f9f'
      }, {
        'name': 'Mexico',
        'lon': -98.96,
        'lat': 20.09,
        'color_min': '#4db100',
        'color_max': '#4ab4b4'
      }, {
        'name': 'Mogadishu',
        'lon': 45.8,
        'lat': 2.41,
        'color_min': '#00fe00',
        'color_max': '#aa5454'
      }, {
        'name': 'Montreal',
        'lon': -72.69,
        'lat': 45.81,
        'color_min': '#d52900',
        'color_max': '#807e7e'
      }, {
        'name': 'Moscow',
        'lon': 36.85,
        'lat': 55.45,
        'color_min': '#da2400',
        'color_max': '#6f8f8f'
      }, {
        'name': 'Nagoya',
        'lon': 136.22,
        'lat': 34.56,
        'color_min': '#738b00',
        'color_max': '#996565'
      }, {
        'name': 'Nagpur',
        'lon': 78.75,
        'lat': 21.7,
        'color_min': '#2bd300',
        'color_max': '#e71717'
      }, {
        'name': 'Nairobi',
        'lon': 36.16,
        'lat': -0.8,
        'color_min': '#38c600',
        'color_max': '#39c5c5'
      }, {
        'name': 'Nanjing',
        'lon': 118.74,
        'lat': 31.35,
        'color_min': '#7f7f00',
        'color_max': '#af4f4f'
      }, {
        'name': 'New Delhi',
        'lon': 77.27,
        'lat': 28.13,
        'color_min': '#41bd00',
        'color_max': '#ea1414'
      }, {
        'name': 'New York',
        'lon': -74.56,
        'lat': 40.99,
        'color_min': '#a75700',
        'color_max': '#9f5f5f'
      }, {
        'name': 'Paris',
        'lon': 2.45,
        'lat': 49.03,
        'color_min': '#8d7100',
        'color_max': '#619d9d'
      }, {
        'name': 'Peking',
        'lon': 116.53,
        'lat': 39.38,
        'color_min': '#a45a00',
        'color_max': '#9d6161'
      }, {
        'name': 'Pune',
        'lon': 74.37,
        'lat': 18.48,
        'color_min': '#23db00',
        'color_max': '#ba4444'
      }, {
        'name': 'Rangoon',
        'lon': 95.44,
        'lat': 16.87,
        'color_min': '#12ec00',
        'color_max': '#bc4242'
      }, {
        'name': 'Rio De Janeiro',
        'lon': -42.82,
        'lat': -23.31,
        'color_min': '#1ee000',
        'color_max': '#9c6262'
      }, {
        'name': 'Riyadh',
        'lon': 46.11,
        'lat': 24.92,
        'color_min': '#46b800',
        'color_max': '#fa0404'
      }, {
        'name': 'Rome',
        'lon': 13.09,
        'lat': 42.59,
        'color_min': '#877700',
        'color_max': '#7d8181'
      }, {
        'name': 'Saint Petersburg',
        'lon': 29.19,
        'lat': 60.27,
        'color_min': '#d62800',
        'color_max': '#53abab'
      }, {
        'name': 'Salvador',
        'lon': -38.81,
        'lat': -13.66,
        'color_min': '#12ec00',
        'color_max': '#966868'
      }, {
        'name': 'Santiago',
        'lon': -69.89,
        'lat': -32.95,
        'color_min': '#8d7100',
        'color_max': '#00ffff'
      }, {
        'name': 'Santo Domingo',
        'lon': -69.3,
        'lat': 18.48,
        'color_min': '#0cf200',
        'color_max': '#9d6161'
      }, {
        'name': 'Seoul',
        'lon': 126.1,
        'lat': 37.78,
        'color_min': '#a65800',
        'color_max': '#867878'
      }, {
        'name': 'Shanghai',
        'lon': 120.63,
        'lat': 31.35,
        'color_min': '#7a8400',
        'color_max': '#b14d4d'
      }, {
        'name': 'Shenyang',
        'lon': 123.55,
        'lat': 40.99,
        'color_min': '#ce3000',
        'color_max': '#7e8080'
      }, {
        'name': 'Singapore',
        'lon': 103.66,
        'lat': 0.8,
        'color_min': '#03fb00',
        'color_max': '#9c6262'
      }, {
        'name': 'Surabaya',
        'lon': 112.7,
        'lat': -7.23,
        'color_min': '#0000ff',
        'color_max': '#a45a5a'
      }, {
        'name': 'Surat',
        'lon': 73.56,
        'lat': 21.7,
        'color_min': '#22dc00',
        'color_max': '#d42a2a'
      }, {
        'name': 'Sydney',
        'lon': 151.78,
        'lat': -34.56,
        'color_min': '#3ec000',
        'color_max': '#55a9a9'
      }, {
        'name': 'São Paulo',
        'lon': -46.31,
        'lat': -23.31,
        'color_min': '#37c700',
        'color_max': '#768888'
      }, {
        'name': 'Taipei',
        'lon': 122.36,
        'lat': 24.92,
        'color_min': '#3ac400',
        'color_max': '#a35b5b'
      }, {
        'name': 'Taiyuan',
        'lon': 111.86,
        'lat': 37.78,
        'color_min': '#bb4300',
        'color_max': '#718d8d'
      }, {
        'name': 'Tangshan',
        'lon': 113.9,
        'lat': 37.78,
        'color_min': '#9f5f00',
        'color_max': '#8c7272'
      }, {
        'name': 'Tianjin',
        'lon': 116.53,
        'lat': 39.38,
        'color_min': '#a45a00',
        'color_max': '#9d6161'
      }, {
        'name': 'Tokyo',
        'lon': 139.23,
        'lat': 36.17,
        'color_min': '#827c00',
        'color_max': '#8c7272'
      }, {
        'name': 'Toronto',
        'lon': -80.5,
        'lat': 44.2,
        'color_min': '#c73700',
        'color_max': '#7a8484'
      }, {
        'name': 'Umm Durman',
        'lon': 32.5,
        'lat': 15.27,
        'color_min': '#1ee000',
        'color_max': '#e31b1b'
      }, {
        'name': 'Wuhan',
        'lon': 114.46,
        'lat': 29.74,
        'color_min': '#7b8300',
        'color_max': '#b54949'
      }, {'name': 'Xian', 'lon': 108.97, 'lat': 34.56, 'color_min': '#9a6400', 'color_max': '#867878'}],
      rotation: '关闭旋转',
      show_city: true,
      show_country: false,
    }
  },
  mounted() {
    this.infoMap()
  },
  methods: {

    // 重置
    reset() {
      this.infoMap()
    },
    //转换数据
    turndata() {
      if (this.show_country) {
        this.show_country = false
      } else {
        this.show_country = true
      }
      this.columnChange()
    },
    // 地球添加标记点
    infoMap() {
      for (let i = 0; i < this.objList.length; i++) {
        this.$refs.threeMapId.infoMark(this.objList[i]);
      }
    },

    // 移动相机
    cameraPos(item) {
      this.$refs.threeMapId.cameraPos(item);
    },

    // 开启或关闭地球自动旋转
    rotationChange() {
      this.$refs.threeMapId.rotationY = !this.$refs.threeMapId.rotationY
      this.rotation = this.$refs.threeMapId.rotationY === true ? '关闭旋转' : '开启旋转'
      this.$refs.threeMapId.frameDivClose()
    },

    // 添加光柱infoColumn
    columnChange() {
      this.showcol=true
      if(!this.show_country){
        this.colvalue="max temperature : blue->red"
      }
      else{
        this.colvalue="min temperature : purple->yellow"
      }
      for (let i = 0; i < this.objList_2.length; i++) {
        this.$refs.threeMapId.infoColumn(this.objList_2[i], this.show_country);
      }
    },


  }
}
</script>

<style lang="scss">

/* 搜索框样式 */
.search {
  width: 180px;
  height: 25px;
  //background-image: url(搜索.png);    /*搜索框背景图片*/
  background-repeat: no-repeat; /*设置背景图片不平铺*/
  border-radius: 30px 30px 30px 30px;
  padding-left: 40px;
  background-position: 10px 10px; /*设置背景图片的位置*/
  color: darkgray;
  font-size: 15px;
  border: none; /*去除边框*/
}


.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/images/back.jpg");
  background-size: 100% 130%;

  .rightMain {
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    z-index: 100;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    background-color: rgba(255, 255, 255, .2);

    .title {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .cont {
      height: 150px;

      ul {
        padding: 0;
        margin-bottom: 0;

        li {
          list-style: none;
          float: left;
          width: 33.33%;
          padding: 10px 0;
          text-align: center;
          cursor: pointer;
          font-size: 14px;

          &:hover {
            color: aquamarine;
          }
        }
      }
    }
  }
}
</style>
