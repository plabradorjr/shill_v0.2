if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "api.shill.lol"
    # "key:" on line 2 is the name of the session cookie, domain: is the heroku domain for rails?(i think)
else
    Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end