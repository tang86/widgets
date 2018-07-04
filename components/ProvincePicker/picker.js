// components/ProvincePicker/picker.js
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
    cityEnabled: false,
    districtEnabled: false,
    showMessage: false,
    messageContent: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择省
    changeProvince: function (e) {
      this.resetAreaData('province')
      p = e.detail.value
      this.setAreaData('province', p)
    },
    // 选择市
    changeCity: function (e) {
      this.resetAreaData()
      c = e.detail.value
      this.setAreaData('city', p, c)
    },
    // 选择区
    changeDistrict: function (e) {
      d = e.detail.value
      this.setAreaData('district', p, c, d)
    },
    setAreaData: function (t, p, c, d) {
      switch (t) {
        case 'province':
          this.setData({
            provinceSelIndex: p,
            cityEnabled: true
          })
          break;
        case 'city':
          this.setData({
            citySelIndex: c,
            districtEnabled: true
          })
          break;
        case 'district':
          this.setData({
            districtSelIndex: d
          })
      }

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
    // 重置数据
    resetAreaData: function (type) {
      this.setData({
        districtName: [],
        districtCode: [],
        districtSelIndex: '',
        districtEnabled: false
      })
      if (type == 'province') {
        this.setData({
          cityName: [],
          cityCode: [],
          citySelIndex: ''
        })
      }
    }
  }
})
