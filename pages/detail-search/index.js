// pages/detail-search/index.js
import { getSearchHot, getSearchSuggest } from '../../service/api_search'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotKeyWords: [],
    suggestSongs: [],
    searchValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  getPageData() {
    getSearchHot().then(res => {
      this.setData({ hotKeyWords: res.result.hots })
    })
  },

  handleSearchChange(event) {
    const searchValue = event.detail
    this.setData({ searchValue })
    if (!searchValue.length) {
      this.setData({ suggestSongs: [] })
      return
    }
    getSearchSuggest(searchValue).then(res => {
      this.setData({ suggestSongs: res.result.allMatch })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})