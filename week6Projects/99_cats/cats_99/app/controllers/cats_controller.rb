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

    def create
        @kitty = Cat.new(cat_params)

        if @kitty.save
            redirect_to cat_url(@kitty)
        else
            render json: @kitty.errors.full_messages, status: 422
        end
    end

    def edit
        @kitty = Cat.find(params[:id])
        render :edit
    end

    def update
        @kitty = Cat.find(params[:id])

        if @kitty.update(cat_params)
            redirect_to cat_url(@kitty)
        else
            render json: @kitty.errors.full_messages, status: 422
        end
    end

    private

    def cat_params
        params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
    end
end