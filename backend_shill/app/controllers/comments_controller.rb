class CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render json: @comments, status: 200
    end

    def show
        comment = Comment.find(params[:id])
        username = comment.user.name
        user_comment = comment.comment

        render json:  {username: username, comment: user_comment}
    end

    def create
        if @current_user
            @comment = Comment.new(comment_params)
            @comment.username = @current_user.username
            @comment.save
        else
            render json: {
                is_logged: false
            }
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:comment)
    end

end