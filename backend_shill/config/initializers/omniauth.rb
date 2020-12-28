Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'aacCtjx2W1uROT5RXN4R6QJSC', 'qFPMLMScqrd0WEYgBZy5FKcnj4hJs5GWSplWXLyAmTYoRG4NDF',
  {
    :secure_image_url => 'true',
    :image_size => 'original',
    :authorize_params => {
      :force_login => 'true',
    }
  }
end