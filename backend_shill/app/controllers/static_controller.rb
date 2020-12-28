class StaticController < ApplicationController
    def home
        render json: { status: "Yay its working" }
    end
end