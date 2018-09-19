// pages/relation/relation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        relation:[
            {title:'0769-33305933',src:'/assets/images/dianhua.png',class:'phone'},
            { title: '8863568', src: '/assets/images/QQ.png', class: 'QQ' },
            { title: '8863568@qq.com', src: '/assets/images/youxiang.png', class: 'email' },
            { title: '东莞东城卓越时代广场3栋1207', src: '/assets/images/dingwei3.png', class: 'location' },
        ]
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
    
    },
    call(){
        wx.makePhoneCall({
            phoneNumber: '0769-33305933',
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })  
    }
})