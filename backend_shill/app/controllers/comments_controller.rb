class CommentsController < ApplicationController
    include CurrentUserConcern

    def index
        @comments = Comment.all.paginate(page: params[:page], per_page: 100).order("created_at DESC")
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
                @comment.user = @current_user
                @comment.username = @current_user.username
                @comment.image_url = @current_user.image_url
                if @comment.save
                    render json: {
                        status: "success"
                    }
                else
                    render json: {
                        status: "failed to save comment"
                    }
                end
            else
                render json: {
                    status: "user not logged in"
                }
            end
    end

    private

    def comment_params
        params.require(:comment).permit(:comment)
    end

end