class V1::BooksController < ApplicationController
  def index
    books = Book.all
    render :json => books.to_json(:include => :user)
  end

  def create
    book = Book.new(book_params)
    if book.save
      render :json => book
    end
  end

  def show
    book = Book.find(params[:id])
    render :json => book
  end

  def destroy
    book = Book.find(params[:id])
    if book.destroy
      render :json => book
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :body, :user_id)
  end
end
