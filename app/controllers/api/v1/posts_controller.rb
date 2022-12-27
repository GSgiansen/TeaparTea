class Api::V1::PostsController <ApplicationController

    def index
        @posts = Post.all
        render json:@posts
    end



    def create
        @post = Post.new(post_params)
        if @post.save
            render json:{ data: @post, status: "success"}, status: :ok
        else
            render json:{ data: @post.error.full_messages, status: "failure"}, status: :unprocessable_entity
    
        end
    end

    private 

    def post_params
        params.require(:post).permit(:title, :body)
    end
end