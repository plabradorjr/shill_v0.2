class SessionsController < ApplicationController
    include CurrentUserConcern

    def create
        user = User
                .find_by(email: params["user"]["email"])
                .try(:authenticate, params["user"]["password"])
        if user
            session[:user_id] = user.id 
            render json: {
                status: :created,
                is_logged: true,
                user: user 
            }
        else
            render json: { status: 401 }
        end
    end

    def logged_in

        if @current_user
            render json: {
                is_logged: true,
                name: @current_user.name,
                image_url: @current_user.image_url,
                twitter_link: @current_user.username
            }
        else
            render json: {
                is_logged: false
            }
        end
    end

    def logout
        reset_session
        render json: { status: 200, logged_out: true }
    end

    def callback
        
        twitter_uid = request.env["omniauth.auth"][:uid]
        twitter_username = request.env["omniauth.auth"][:info][:nickname]
        twitter_image_url = request.env["omniauth.auth"][:info][:image]
        twitter_name = request.env["omniauth.auth"][:info][:name]

        if user = User.find_by(:uid => twitter_uid)
            user.update(image_url: twitter_image_url, name: twitter_name, username: twitter_username)
            user.comments.each { |x| x.update(image_url: twitter_image_url, username: twitter_username) }
            session[:user_id] = user.id 
            # render json: {
            #     status: :created,
            #     is_logged: true,
            #     name: user.name,
            #     image_url: user.image_url,
            #     twitter_link: user.username
            # }
            redirect_to 'http://localhost:3000'
        else
            user = User.create!(
                uid: twitter_uid,
                username: twitter_username,
                name: twitter_name,
                image_url: twitter_image_url,
                password: SecureRandom.hex
            )
                if user
                    session[:user_id] = user.id
                    # render json: {
                    #     status: :created,
                    #     is_logged: true,
                    #     name: user.name,
                    #     image_url: user.image_url,
                    #     twitter_link: user.username
                    # }
                    redirect_to 'http://localhost:3000'
                else
                    render json: { status: 500 }
                end
        end
    end

end