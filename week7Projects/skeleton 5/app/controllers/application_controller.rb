class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?, :is_owner?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil   
    end

    def logged_in?
        !current_user.nil?
    end

    def block_login_access
        redirect_to cats_url if current_user
    end

    def is_owner?(cat)
        current_user.id == cat.user_id
    end

    def require_user
        redirect_to new_session_url if current_user.nil?
    end
end
