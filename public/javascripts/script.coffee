# Constants
APP_ID = "hxAHJqTV34GWQ2E5SfnezIsV1Oka35GWf9hgxy3cVVLVc8pudoxcNmt6.QiiXiVxLYi6jmz.k7FCE3scCh21JaP24r9WZYQ-"
UNITS = "c"

# Variables
latitude  = null
longitude = null

# Creates loading spinner using <canvas>
create_spinner = ->
  canvas = document.createElement "canvas"
  ctx = canvas.getContext "2d"
  size = 50
  bars = 20

  canvas.id     = "spinner"
  canvas.width  = size
  canvas.height = size

  document.body.appendChild canvas

  ctx.translate size / 2, size / 2

  # spin
  setInterval ( ->
    ctx.clearRect -size / 2, -size / 2, size, size
    ctx.rotate Math.Pi * 2 / bars

    for x in [0..bars]
      ctx.beginPath()
      ctx.moveTo 0, size / 4
      ctx.lineTo 0, size / 2
      ctx.strokeStyle = "rgba(0,0,0,#{x / bars})"
      ctx.stroke()
      ctx.rotate Math.PI * 2 / bars
  ), 50

# Get user's current location
get_location = ->
  if navigator.geolocation
    navigator.geolocation.getCurrentPosition geolocation_success, geolocation_failure
  else
    show_error "Your browser does not support geolocation. Falling back."
    do geolocation_fallback

geolocation_success = (position) ->
  latitude  = position.coords.latitude
  longitude = position.coords.longitude
  do get_weather

geolocation_failure = (error) ->
  switch error.code
    when error.TIMEOUT
      show_error "A timeout has occured. Falling back."
      do geolocation_fallback
    when error.POSITION_UNAVAILABLE
      show_error "We can't detect your position with geolocation. Falling back."
      do geolocation_fallback
    when error.PERMISSION_DENIED
      show_error "Geolocation permission denied. Falling back."
      do geolocation_fallback
    when error.UNKNOWN_ERROR
      show_error "An unknown error has occured. Falling back."
      do geolocation_fallback

# fallback if geolocation fails.
geolocation_fallback = ->
  latitude  = geoplugin_latitude()
  longitude = geoplugin_longitude()
  do get_weather

# fetches and displays weather for current location
get_weather = ->
  location_api_url = "http://where.yahooapis.com/geocode?location=#{latitude},#{longitude}&flags=J&gflags=R&appid=#{APP_ID}"
  UNITS = "f" if geoplugin_countryCode() is "US"
  yql              = "select * from weather.forecast where woeid=WID and u='#{UNITS}'"
  weather_api_url  = "http://query.yahooapis.com/v1/public/yql?q=#{encodeURIComponent yql}&format=json&callback=?"

  city    = null
  code    = null
  country = null
  result  = null
  woeid   = null

  $.getJSON location_api_url, (response) ->
    unless response.ResultSet.Found is 1
      show_error "Could not find your location."
      return false

    woeid = response.ResultSet.Results[0].woeid

    $.getJSON weather_api_url.replace("WID", woeid), (response) ->
      unless response.query.results.channel.item.condition
        show_error "We can't find weather information for your current location."
        return false

      weather   = response.query.results.channel
      glyph     = get_glyph weather
      temp_icon = get_temp_icon weather

      # round wind speed
      weather.wind.speed = Math.floor weather.wind.speed

      $(".container").html Handlebars.templates.content {results: weather, icon: {glyph: glyph, temp: temp_icon}}

      city = $("#location .city")
      country = $("#location .country")

      if city.text().length > 9 or country.text().length > 9
        console.log country.text().length
        $("#location").css "font-size" : "30px"

      if city.text().length > 15 or country.text().length > 15
        console.log country.text().length
        $("#location").css "font-size" : "25px"

      $("#spinner").fadeOut 300, -> $(this).remove()

# Changes weather glyph based on current conditions
get_glyph = (weather) ->
  switch weather.item.condition.code
    when '5' then 'o'
    when '6', '7' then 'y'
    when '11', '12', '40' then '='
    when '13', '14', '15', '16', '41', '42', '43', '46' then 'o'
    when '17' then 'y'
    when '18' then 'e'
    when '20', '21', '22' then 's'
    when '23', '24' then 'k'
    when '26' then '`'
    when '27', '29', '33' then '2'
    when '28', '30', '34', '44' then '1'
    when '31' then '/'
    when '32', '36' then 'v'
    when '37', '38', '39', '45', '47' then 'z'
    else 'g'

get_temp_icon = (weather) ->
  temp = weather.item.condition.temp

  if temp > 30
    'E'
  else if temp < 0
    ')'
  else
    "_+QW".charAt (temp > 10) + (temp > 15) + (temp > 20)

$ ->
  do create_spinner
  do get_location

show_error = (error = "An unknown error occured. Please try again.") ->
  $("#error").html(error).delay(200).fadeIn().delay(5000).fadeOut()
