class CatsController < ApplicationController
    def index
        @kitties = Cat.all
        render :index
    end

    def show
        @kitty = Cat.find(params[:id])

        if @kitty
            render :show
        else
            render json: @kitty.errors.full_messages, status: 422
        end
    end

    def new
        @kitty = Cat.new
        render :new
    end
end