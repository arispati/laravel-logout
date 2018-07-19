# laravel-logout
Package for Laravel Logout

## Installation

```bash
npm install laravel-logout
```

This package need X-CSRF-TOKEN, add this code to your header template
```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

In your app.js, add this code

```javascript
require('laravel-logout');
```

## Usage

In your blade template
```html
<a laravel-logout>Logout</a>
```

The default logout url use logout route from laravel ('/logout'). If you have different logout url, use data-action attribute
```html
<a laravel-logout data-action="your-logout-url">Logout</a>
```
