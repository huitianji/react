
//var data = {list: ["aui", "test"]};
//
//var html = template("index", data);
var data = {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};

var htmls = template('index', data);
$("#content").html(htmls);