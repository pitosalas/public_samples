class PostsController < ApplicationController
  include CableReady::Broadcaster

  # GET /posts or /posts.json
  def index
    @posts = Post.all.order(created_at: :desc)
    @post = Post.new
  end

  # POST /posts or /posts.json
  def create
    post = Post.create(post_params)
    cable_ready["timeline"].console_log(message: "***** cable ready post created")
    # cable_ready["timeline"].insert_adjacent_html(
    #   selector: "#timeline",
    #   position: "afterbegin",
    #   html: render_to_string(partial: "post", locals: { post: post })
    # )
    cable_ready.broadcast
    redirect_to posts_path
  end

  private

    # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:body)
  end
end
