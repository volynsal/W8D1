class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    benches = Bench.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: seating_range)
    end

    @benches = benches.includes(:reviews, :favorite_users)
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  private
  def bench_params
    params.require(:bench).permit(
      :lat,
      :lng,
      :description,
      :seating,
      :photo
    )
  end

end
