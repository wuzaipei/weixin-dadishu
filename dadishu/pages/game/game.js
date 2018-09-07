// pages/game/game.js
var dataMice = [
  {
    src: '../../assets/img/vendor_people00.png'
  },
  {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }
]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    mice: [
      {
        src: '../../assets/img/vendor_people00.png'
      },
      {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }
    ],
    count: 5,
    time: 10,
    interval: null,
    currentIndex: 0,
    score: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.data.interval = setInterval(() => {


      var num = parseInt(Math.random() * 12) //[0,12)整数
      var list = JSON.parse(JSON.stringify(dataMice))
      this.data.currentIndex = num;
      list[num] = { src: '../../assets/img/vendor_hole01.png' }
      // console.log(list)
      // console.log(this)
      this.setData({
        time: --this.data.time,
        mice: list
      })
      if (this.data.time == 0) {
        clearInterval(this.data.interval)
        //跳转结束页面
        wx.redirectTo({
          url: "/pages/endPage/endPage?score=" + this.data.score,
        })
      }

    }, 1000)



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
  clickMice(e) {
    // console.log(e)
    var index = e.target.dataset.index
    if (index == this.data.currentIndex) {
      this.data.score += 10;
      var list = JSON.parse(JSON.stringify(dataMice))
      list[index] = { src: '../../assets/img/vendor_hole02.png' }
      this.setData({
        mice: list
      })

    } else {
      var num = this.data.count
      num--;
      if (num == 0) {
        wx.redirectTo({
          url: "/pages/endPage/endPage?score=" + this.data.score,
        })
      }
      this.setData({
        count: num
      })
    }
  }

})