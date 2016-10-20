
var data = {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};

var htmls = template('d:/jihuitian/react/gulp-template/template/index', data);
$("#content").html(htmls);
//var render = require('./tpl/build/news/list');
//var html = render(_list);