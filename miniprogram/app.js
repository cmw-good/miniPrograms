"use strict";
var worker = wx.createWorker('workers/request/index.js');
worker.onMessage(function (res) {
    console.log(res);
});
worker.postMessage({
    msg: 'hello worker',
});
worker.terminate();
App({
    globalData: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUc7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDakIsR0FBRyxFQUFFLGNBQWM7Q0FDcEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRW5CLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRSxFQUFFO0NBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5Zyo5Li757q/56iL55qE5Luj56CBIGFwcC5qcyDkuK3liJ3lp4vljJYgV29ya2VyXG5jb25zdCB3b3JrZXIgPSB3eC5jcmVhdGVXb3JrZXIoJ3dvcmtlcnMvcmVxdWVzdC9pbmRleC5qcycpOyAvLyDmlofku7blkI3mjIflrpogd29ya2VyIOeahOWFpeWPo+aWh+S7tui3r+W+hO+8jOe7neWvuei3r+W+hFxud29ya2VyLm9uTWVzc2FnZShmdW5jdGlvbiAocmVzKSB7XG4gIGNvbnNvbGUubG9nKHJlcyk7XG59KTtcblxud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgbXNnOiAnaGVsbG8gd29ya2VyJyxcbn0pO1xuXG53b3JrZXIudGVybWluYXRlKCk7XG4vLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHt9LFxufSk7XG4iXX0=