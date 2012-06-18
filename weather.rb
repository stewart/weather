class Weather < Sinatra::Base
  before do
    response.headers['Cache-Control'] = 'public, max-age=31557600' # 1 year
  end

  get(/.+/) do
    haml :index
  end
end
