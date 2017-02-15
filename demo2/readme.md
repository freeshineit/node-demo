##node url

####url.parse(urlString[, parseQueryString[, slashesDenoteHost]])#
Added in: v0.1.25
urlString <String> The URL string to parse.
parseQueryString <Boolean> If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Defaults to false.
slashesDenoteHost <Boolean> If true, the first token after the literal string // and preceding the next / will be interpreted as the host. For instance, given //foo/bar, the result would be {host: 'foo', pathname: '/bar'} rather than {pathname: '//foo/bar'}. Defaults to false.
The url.parse() method takes a URL string, parses it, and returns a URL object.

[node url](https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)
#####node url的使用
![node url.parse() 一个参数](https://github.com//freeshineit/node-demo/blob/master/demo2/images/15F40ABE-CC5D-42ED-856D-8434D2DFC117.png?raw=true)

![node url.parse() 两个参数](https://github.com//freeshineit/node-demo/blob/master/demo2/images/CA6C5EAD-0224-459B-8542-70A161528096.png?raw=true)

![node url.parse() 三个参数](https://github.com//freeshineit/node-demo/blob/master/demo2/images/B9B2C3A0-5F92-4360-A618-41E2B3CEBC0E.png?raw=true)

#####url.format(urlObject)#
Added in: v0.1.25
urlObject <Object> | <String> A URL object (as returned by url.parse() or constructed otherwise). If a string, it is converted to an object by passing it to url.parse().
The url.format() method returns a formatted URL string derived from urlObject.

If urlObject is not an object or a string, url.parse() will throw a TypeError.

![node url.format()](https://github.com//freeshineit/node-demo/blob/master/demo2/images/C7E0F6DF-78CD-4059-A47C-3CF79FC142F4.png?raw=true)

#####url.resolve(from, to)#
Added in: v0.1.25
from <String> The Base URL being resolved against.
to <String> The HREF URL being resolved.
The url.resolve() method resolves a target URL relative to a base URL in a manner similar to that of a Web browser resolving an anchor tag HREF.

For example:
```
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

```

![node url.format()](https://github.com//freeshineit/node-demo/blob/master/demo2/images/B385FE66-5D87-4A86-B61C-2EC9DB5BBA18.png?raw=true)







