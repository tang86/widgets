// components/Picker/picker.js
var area = require('../../data/area')
var p = 0, c = 0, d = 0
Component({
  /**
   * 组件的属性列表
   */
  properties: {


  },

  /**
   * 组件的初始数据
   */
  data: {
    provinceName: [],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    districtSelIndex: '',
    showMessage: false,
    messageContent: '',
    showDistpicker: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setAreaData: function (p, c, d) {
      var p = p || 0 // provinceSelIndex
      var c = c || 0 // citySelIndex
      var d = d || 0 // districtSelIndex
      // 设置省的数据
      var province = area['100000']
      var provinceName = [];
      var provinceCode = [];
      for (var item in province) {
        provinceName.push(province[item])
        provinceCode.push(item)
      }
      this.setData({
        provinceName: provinceName,
        provinceCode: provinceCode
      })
      // 设置市的数据
      var city = area[provinceCode[p]]
      var cityName = [];
      var cityCode = [];
      for (var item in city) {
        cityName.push(city[item])
        cityCode.push(item)
      }
      this.setData({
        cityName: cityName,
        cityCode: cityCode
      })
      // 设置区的数据
      var district = area[cityCode[c]]
      var districtName = [];
      var districtCode = [];
      for (var item in district) {
        districtName.push(district[item])
        districtCode.push(item)
      }
      this.setData({
        districtName: districtName,
        districtCode: districtCode
      })
    },
    changeArea: function (e) {
      p = e.detail.value[0]
      c = e.detail.value[1]
      d = e.detail.value[2]
      this.setAreaData(p, c, d)
    },
    showDistpicker: function () {
      this.setData({
        showDistpicker: true
      })
    },
    distpickerCancel: function () {
      this.setData({
        showDistpicker: false
      })
    },
    distpickerSure: function () {
      this.setData({
        provinceSelIndex: p,
        citySelIndex: c,
        districtSelIndex: d
      })
      this.distpickerCancel()
    },
  }
})
