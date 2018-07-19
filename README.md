# laravel-logout
Package for Laravel Logout

## Installation
```bash
npm install laravel-logout
```

## Usage

This package need X-CSRF-TOKEN, add this code to your header template
```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

In resources/assets/js/app.js

```javascript
require('laravel-logout')
```

In your blade template
```html
<a laravel-logout>Logout</a>
```

The default logout url use route logout ('/logout'). If you have different action, use this code
```html
<a laravel-logout data-action="your-logout-url">Logout</a>
```
