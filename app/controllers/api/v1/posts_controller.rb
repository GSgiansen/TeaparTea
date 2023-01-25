class Api::V1::PostsController <ApplicationController

    def index
        @posts = Post.all
        render json: @posts
    end
    def show
        @post = Post.find(params[:id])
        render json:@post
    end

    def delete
        @post = Post.find(params[:id])
        @post.destroy
        @posts = Post.all
        render json:{ data: @posts,statu: "sucessfully deleted"}, status: :ok
    end

    def destroy
        @post= Post.find(params[:id])
        if @post.present?
          @post.destroy
        end
    end

    def update
        post = Post.find(params[:id])
        user_id = post_params[:title]
            res = post.update(post_params)
            render json: res
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
        params.require(:post).permit(:title, :body, :tag)
    end
end