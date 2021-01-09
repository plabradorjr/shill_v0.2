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
        @comment = Comment.new(comment_params)
        @comment.user = @current_user
        @comment.save

    end

    private

    def comment_params
        params.require(:comment).permit(:comment)
    end

end