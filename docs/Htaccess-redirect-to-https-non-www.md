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

**Source**

http://stackoverflow.com/questions/39973281/