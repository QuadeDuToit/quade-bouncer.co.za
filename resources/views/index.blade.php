<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bouncer Demo</title>

    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">

</head>

<body>

    <div id="app">
        <app ref="app"></app>
    </div>

    <script src="{{ mix('assets/js/app.js') }}"></script>

</body>

</html>
