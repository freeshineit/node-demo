##Query String

#####querystring.escape(str) 对字符串进行编码

For example:
```
    querstring.escape('小邵')
```
Result：
![querystring.escape](https://github.com//freeshineit/node-demo/blob/master/demo3/images/F448A27D-090A-4083-865F-4874AF24B25C.png?raw=true)

#####querystring.unescape(str) 对编码后的进行反解码

For example：
```
    querystring.unescape('%E5%B0%8F%E9%82%B5')
    
```
Result:
![](https://github.com//freeshineit/node-demo/blob/master/demo3/images/C9E7F47D-3C7A-450B-951C-BA980F587C06.png?raw=true)

#####querystring.parse(str[, sep[, eq[, options]]])  分析URL查询字符串到一个集合中的键和值对

For example:
eg1:
```
    querystring.parse('foo=bar&abc=xyz&abc=123')
```

eg2:
```
    querystring.parse('foo=bar,abc=xyz,abc=123',',')
```

eg3:
```
    querystring.parse('foo:bar,abc:xyz,abc:123',',',':')
```

eg3:自定义
```
    querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
      { decodeURIComponent: gbkDecodeURIComponent })
```
Result:
![](https://github.com//freeshineit/node-demo/blob/master/demo3/images/6370F939-CB02-4A75-9FBB-4ABCA6AEC605.png?raw=true)

#####querystring.stringify(obj[, sep[, eq[, options]]])  
The querystring.stringify() method produces a URL query string from a given obj by iterating through the object's "own properties".
(querystring.stringify（）方法通过遍历对象的“自己的属性”来生成来自给定obj的URL查询字符串。)

For example:
```
    querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
    // returns 'foo=bar&baz=qux&baz=quux&corge='

    querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
    // returns 'foo:bar;baz:qux'
```

Result:
![](https://github.com//freeshineit/node-demo/blob/master/demo3/images/C2F4FD94-2C3B-44FF-A004-DA4B68C5583C.png?raw=true)





[node 官方 querystring](https://nodejs.org/api/querystring.html)
