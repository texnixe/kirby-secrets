# Htaccess

## Browser cache

Using the browser cache is good for both speed and SEO (Search Engine Optimization). It will set an expire date on different types of files.

Place this code at the bottom of your htaccess file.

```text
<IfModule mod_expires.c>
	ExpiresActive On
	ExpiresDefault "access plus 10 days"
	ExpiresByType text/css "access plus 1 week"
	ExpiresByType text/plain "access plus 1 month"
	ExpiresByType image/gif "access plus 1 month"
	ExpiresByType image/png "access plus 1 month"
	ExpiresByType image/jpeg "access plus 1 month"
	ExpiresByType image/svg+xml "access plus 1 month"
	ExpiresByType application/javascript "access plus 1 week"
	ExpiresByType application/x-icon "access plus 1 year"
</IfModule>
```

- [css-tricks - Set expires](https://css-tricks.com/snippets/htaccess/set-expires/)

## Gzip compression

Gzip compression is good for both speed and SEO (Search Engine Optimization).

Place this code at the bottom of your htaccess file.

```text
<IfModule mod_filter.c>
	AddOutputFilterByType DEFLATE \
	"application/atom+xml" \
	"application/javascript" \
	"application/json" \
	"application/ld+json" \
	"application/manifest+json" \
	"application/rdf+xml" \
	"application/rss+xml" \
	"application/schema+json" \
	"application/vnd.geo+json" \
	"application/vnd.ms-fontobject" \
	"application/x-font-ttf" \
	"application/x-javascript" \
	"application/x-web-app-manifest+json" \
	"application/xhtml+xml" \
	"application/xml" \
	"font/eot" \
	"font/opentype" \
	"image/bmp" \
	"image/svg+xml" \
	"image/vnd.microsoft.icon" \
	"image/x-icon" \
	"text/cache-manifest" \
	"text/css" \
	"text/html" \
	"text/javascript" \
	"text/plain" \
	"text/vcard" \
	"text/vnd.rim.location.xloc" \
	"text/vtt" \
	"text/x-component" \
	"text/x-cross-domain-policy" \
	"text/xml"
</IfModule>
```

- [Server configs apache](https://github.com/h5bp/server-configs-apache)
- [Server configs apache - Compression](https://github.com/h5bp/server-configs-apache/blob/master/src/web_performance/compression.conf)

## Redirect to https and non www

This code will to two things:

- Redirect from http to https
- Redirect from www to non www

Place it directly after `RewriteEngine on`.

```text
RewriteCond %{HTTP_HOST} ^www\. [NC,OR]
RewriteCond %{HTTPS} off
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L,NE]
```

### http to https

https is good for both security and SEO (Search Engine Optimization). To be able to use it, you need a certificate like [Let's Encrypt](https://letsencrypt.org/) which is free of charge.

### www to non www

Many years ago `www` was more common. Nowdays many sites remove it because it's not needed. A shorter address is also more readable on a mobile device where the address is often cut off.

- [Stackoverflow](http://stackoverflow.com/questions/39973281/)

## Sources

- [css-tricks - Set expires](https://css-tricks.com/snippets/htaccess/set-expires/)
- [Server configs apache](https://github.com/h5bp/server-configs-apache)
- [Server configs apache - Compression](https://github.com/h5bp/server-configs-apache/blob/master/src/web_performance/compression.conf)
- [Stackoverflow - http to https, www to non www and respect urls](http://stackoverflow.com/questions/39973281/)
